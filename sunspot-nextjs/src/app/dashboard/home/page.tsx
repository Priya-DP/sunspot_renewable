'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { Plus, Edit2, Trash2, Upload, Save, X, Image as ImageIcon } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  heading: string;
  description: string;
  image: string;
  link: string;
  displayOrder: number;
}

export default function HomeDashboardPage() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSlide, setEditingSlide] = useState<Partial<Slide> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploading, setUploading] = useState(false);

  const fetchSlides = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/content/home');
      const data = await res.json();
      if (data.slides) setSlides(data.slides);
    } catch (e) {
      console.error('Failed to fetch slides:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url && editingSlide) {
        setEditingSlide({ ...editingSlide, image: data.url });
      }
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!editingSlide?.title || !editingSlide?.heading) return;

    const method = isNew ? 'POST' : 'PUT';
    try {
      const res = await fetch('/api/content/home', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingSlide),
      });
      if (res.ok) {
        setEditingSlide(null);
        fetchSlides();
      }
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this slide?')) return;
    try {
      const res = await fetch(`/api/content/home?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchSlides();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Home Section Manager</h2>
          <p className="text-slate-400 text-sm">Manage Home hero slides, banners, titles, and images</p>
        </div>
        <button
          onClick={() => {
            setIsNew(true);
            setEditingSlide({
              title: 'WELCOME TO SUNSPOT RENEWABLE ENERGY',
              heading: 'Powering a Sustainable Future',
              description: 'Custom solar energy solutions designed for maximum efficiency.',
              image: '/img/hero/hero-8.jpg',
              link: '/',
            });
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Hero Slide</span>
        </button>
      </div>

      {/* Editor Modal/Card */}
      {editingSlide && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-md font-semibold text-amber-400">
              {isNew ? 'Create New Hero Slide' : 'Edit Hero Slide'}
            </h3>
            <button onClick={() => setEditingSlide(null)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Subtitle / Tagline</label>
              <input
                type="text"
                value={editingSlide.title || ''}
                onChange={(e) => setEditingSlide({ ...editingSlide, title: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Main Heading (HTML supported)</label>
              <input
                type="text"
                value={editingSlide.heading || ''}
                onChange={(e) => setEditingSlide({ ...editingSlide, heading: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-medium text-slate-300">Description</label>
              <textarea
                rows={3}
                value={editingSlide.description || ''}
                onChange={(e) => setEditingSlide({ ...editingSlide, description: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Image URL or Upload</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={editingSlide.image || ''}
                  onChange={(e) => setEditingSlide({ ...editingSlide, image: e.target.value })}
                  className="flex-1 p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
                />
                <label className="cursor-pointer px-3 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-medium flex items-center gap-1.5 text-slate-200">
                  <Upload className="w-4 h-4 text-amber-400" />
                  <span>{uploading ? '...' : 'Upload'}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Button Link</label>
              <input
                type="text"
                value={editingSlide.link || '/'}
                onChange={(e) => setEditingSlide({ ...editingSlide, link: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => setEditingSlide(null)}
              className="px-4 py-2 bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold rounded-xl"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-amber-500 text-slate-950 hover:bg-amber-400 text-xs font-semibold rounded-xl flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Slide</span>
            </button>
          </div>
        </div>
      )}

      {/* List of Slides */}
      {loading ? (
        <div className="p-8 text-center text-slate-400 text-sm">Loading slides...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slides.map((slide) => (
            <div key={slide.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                {slide.image ? (
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="w-8 h-8 text-slate-600" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs font-medium text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded">
                  {slide.title}
                </span>
              </div>

              <div>
                <h4
                  className="font-bold text-white text-base line-clamp-1"
                  dangerouslySetInnerHTML={{ __html: slide.heading }}
                />
                <p className="text-slate-400 text-xs mt-1 line-clamp-2">{slide.description}</p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsNew(false);
                    setEditingSlide(slide);
                  }}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs flex items-center gap-1"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(slide.id)}
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
