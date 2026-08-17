'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { Plus, Edit2, Trash2, Upload, Save, X, Image as ImageIcon } from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  delay: string;
  location?: string;
  description?: string;
}

export default function ProjectsDashboardPage() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<ProjectItem> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploading, setUploading] = useState(false);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/content/projects');
      const data = await res.json();
      if (data.projects) setProjects(data.projects);
    } catch (err) {
      console.error('Fetch projects failed:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
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
    if (!editing?.title || !editing?.category || !editing?.image) return;

    const method = isNew ? 'POST' : 'PUT';
    try {
      const res = await fetch('/api/content/projects', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res.ok) {
        setEditing(null);
        fetchProjects();
      }
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      const res = await fetch(`/api/content/projects?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchProjects();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Projects Section Manager</h2>
          <p className="text-slate-400 text-sm">Add, edit, delete, and manage solar & hybrid energy project portfolio</p>
        </div>
        <button
          onClick={() => {
            setIsNew(true);
            setEditing({
              title: '',
              category: 'Solar energy',
              image: '/img/project/01.jpg',
              link: '/project-details',
              delay: '.3',
            });
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Editor Modal */}
      {editing && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-md font-semibold text-amber-400">
              {isNew ? 'Create New Project' : 'Edit Project'}
            </h3>
            <button onClick={() => setEditing(null)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Project Title</label>
              <input
                type="text"
                value={editing.title || ''}
                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Category</label>
              <input
                type="text"
                value={editing.category || 'Solar energy'}
                onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-medium text-slate-300">Project Image</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={editing.image || ''}
                  onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                  placeholder="/img/project/01.jpg or uploaded URL"
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
              <span>Save Project</span>
            </button>
          </div>
        </div>
      )}

      {/* Grid of Projects */}
      {loading ? (
        <div className="p-8 text-center text-slate-400">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="w-8 h-8 text-slate-600" />
                )}
                <span className="absolute top-2 right-2 text-xs font-medium bg-amber-500/90 text-slate-950 px-2.5 py-0.5 rounded-full">
                  {proj.category}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-white text-base">{proj.title}</h4>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsNew(false);
                    setEditing(proj);
                  }}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-1"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(proj.id)}
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
