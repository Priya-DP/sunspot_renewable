'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { Plus, Edit2, Trash2, Upload, Save, X, User } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  facebookLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
  delay?: string;
}

export default function TeamDashboardPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<TeamMember> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploading, setUploading] = useState(false);

  const fetchTeam = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/content/team');
      const data = await res.json();
      if (data.teamMembers) setTeam(data.teamMembers);
    } catch (err) {
      console.error('Fetch team failed:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
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
    if (!editing?.name || !editing?.role) return;

    const method = isNew ? 'POST' : 'PUT';
    try {
      const res = await fetch('/api/content/team', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res.ok) {
        setEditing(null);
        fetchTeam();
      }
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;
    try {
      const res = await fetch(`/api/content/team?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchTeam();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Team Section Manager</h2>
          <p className="text-slate-400 text-sm">Add, edit, delete, and manage company leadership & team members</p>
        </div>
        <button
          onClick={() => {
            setIsNew(true);
            setEditing({
              name: '',
              role: '',
              description: '',
              image: '/img/team/hover-1.png',
              facebookLink: '',
              instagramLink: '',
              linkedinLink: '',
              delay: '.3',
            });
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Team Member</span>
        </button>
      </div>

      {/* Editor Modal */}
      {editing && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-md font-semibold text-amber-400">
              {isNew ? 'Add New Team Member' : 'Edit Team Member'}
            </h3>
            <button onClick={() => setEditing(null)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Member Name</label>
              <input
                type="text"
                value={editing.name || ''}
                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                placeholder="e.g. MR. M. KARUNAKARAN"
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Designation / Role</label>
              <input
                type="text"
                value={editing.role || ''}
                onChange={(e) => setEditing({ ...editing, role: e.target.value })}
                placeholder="e.g. Managing Director"
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-medium text-slate-300">Bio / Description</label>
              <textarea
                rows={3}
                value={editing.description || ''}
                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                placeholder="Experience summary and background..."
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-medium text-slate-300">Photo Image</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={editing.image || ''}
                  onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                  placeholder="/img/team/hover-1.png or uploaded URL"
                  className="flex-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
                />
                <label className="cursor-pointer px-3 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-medium flex items-center gap-1 text-slate-200">
                  <Upload className="w-4 h-4 text-amber-400" />
                  <span>{uploading ? '...' : 'Upload'}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">LinkedIn URL</label>
              <input
                type="text"
                value={editing.linkedinLink || ''}
                onChange={(e) => setEditing({ ...editing, linkedinLink: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Facebook URL</label>
              <input
                type="text"
                value={editing.facebookLink || ''}
                onChange={(e) => setEditing({ ...editing, facebookLink: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
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
              <span>Save Member</span>
            </button>
          </div>
        </div>
      )}

      {/* Grid of Team Members */}
      {loading ? (
        <div className="p-8 text-center text-slate-400">Loading team members...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center shrink-0">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-6 h-6 text-slate-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{member.name}</h4>
                  <span className="text-xs font-medium text-amber-400">{member.role}</span>
                </div>
              </div>

              <p className="text-slate-400 text-xs line-clamp-3">{member.description}</p>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsNew(false);
                    setEditing(member);
                  }}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-1"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
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
