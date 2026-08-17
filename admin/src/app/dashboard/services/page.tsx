'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { Plus, Edit2, Trash2, Upload, Save, X, Wrench } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  category: string;
  active: boolean | number;
  delay: string;
  content: string;
}

const defaultIcons = [
  'SolarPanelIcon',
  'SolarPowerPlantIcon',
  'RooftopSolarIcon',
  'GroundMountedIcon',
  'WaterPumpIcon',
  'WaterHeaterIcon',
  'StreetLightIcon',
  'SolarFencingIcon',
  'SolarLanternIcon',
];

export default function ServicesDashboardPage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<ServiceItem> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploading, setUploading] = useState(false);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/content/services');
      const data = await res.json();
      if (data.services) setServices(data.services);
    } catch (err) {
      console.error('Fetch services failed:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const body = new FormData();
    body.append('file', file);

    try {
      const res = await fetch('/api/upload', { method: 'POST', body });
      const data = await res.json();
      if (data.url && editing) {
        setEditing({ ...editing, image: data.url });
      }
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!editing?.title || !editing?.description) return;

    const method = isNew ? 'POST' : 'PUT';
    try {
      const res = await fetch('/api/content/services', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res.ok) {
        setEditing(null);
        fetchServices();
      }
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    try {
      const res = await fetch(`/api/content/services?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchServices();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Services Section Manager</h2>
          <p className="text-slate-400 text-sm">Add, edit, delete, and manage solar & renewable energy services</p>
        </div>
        <button
          onClick={() => {
            setIsNew(true);
            setEditing({
              title: '',
              description: '',
              icon: 'SolarPanelIcon',
              image: '',
              category: 'Solar Energy',
              active: 0,
              delay: '.3',
            });
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Editor Modal/Card */}
      {editing && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-md font-semibold text-amber-400">
              {isNew ? 'Create New Service' : 'Edit Service'}
            </h3>
            <button onClick={() => setEditing(null)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Service Title</label>
              <input
                type="text"
                value={editing.title || ''}
                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Category / Type</label>
              <input
                type="text"
                value={editing.category || 'Solar Energy'}
                onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-medium text-slate-300">Short Description</label>
              <textarea
                rows={3}
                value={editing.description || ''}
                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Icon Key</label>
              <select
                value={editing.icon || 'SolarPanelIcon'}
                onChange={(e) => setEditing({ ...editing, icon: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              >
                {defaultIcons.map((ic) => (
                  <option key={ic} value={ic}>
                    {ic}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Service Image</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={editing.image || ''}
                  onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                  placeholder="/img/service/... or uploaded URL"
                  className="flex-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
                />
                <label className="cursor-pointer px-3 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-medium flex items-center gap-1 text-slate-200">
                  <Upload className="w-4 h-4 text-amber-400" />
                  <span>{uploading ? '...' : 'Upload'}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => setEditing(null)}
              className="px-4 py-2 bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold rounded-xl"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-amber-500 text-slate-950 hover:bg-amber-400 text-xs font-semibold rounded-xl flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Service</span>
            </button>
          </div>
        </div>
      )}

      {/* Grid of Services */}
      {loading ? (
        <div className="p-8 text-center text-slate-400">Loading services...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((serv) => (
            <div key={serv.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
                    {serv.icon}
                  </span>
                </div>
                <h4 className="font-bold text-white text-base">{serv.title}</h4>
                <p className="text-slate-400 text-xs line-clamp-3">{serv.description}</p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsNew(false);
                    setEditing(serv);
                  }}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-1"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(serv.id)}
                  className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
