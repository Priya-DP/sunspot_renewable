'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { Save, Upload, CheckCircle } from 'lucide-react';

interface AboutData {
  id?: number;
  sectionSubtitle: string;
  mainHeading: string;
  description: string;
  aboutImage1: string;
  aboutImage2: string;
  experienceYears: string;
  reliabilityTitle: string;
  reliabilityDesc: string;
  supportTitle: string;
  supportDesc: string;
}

export default function AboutDashboardPage() {
  const [formData, setFormData] = useState<AboutData>({
    sectionSubtitle: 'About Us',
    mainHeading: 'Welcome To Sunspot Renewable Energy System',
    description: 'SUNSPOT Renewable Engineering is backed by a highly qualified team of engineers...',
    aboutImage1: '/img/about/about3.jpeg',
    aboutImage2: '/img/about/about1.jpg',
    experienceYears: '60+',
    reliabilityTitle: 'Reliability and Performance',
    reliabilityDesc: 'Proven solar solutions delivering consistent, high-efficiency performance.',
    supportTitle: 'BrightSun Support',
    supportDesc: 'Complete support from installation to after-sales service.',
  });

  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/content/about')
      .then((res) => res.json())
      .then((data) => {
        if (data.about) setFormData(data.about);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleUpload = async (field: 'aboutImage1' | 'aboutImage2', e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(field);
    const body = new FormData();
    body.append('file', file);

    try {
      const res = await fetch('/api/upload', { method: 'POST', body });
      const data = await res.json();
      if (data.url) {
        setFormData((prev) => ({ ...prev, [field]: data.url }));
      }
    } catch (err) {
      console.error('Upload error:', err);
    } finally {
      setUploading(null);
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch('/api/content/about', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  if (loading) return <div className="p-8 text-center text-slate-400">Loading About details...</div>;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">About Section Manager</h2>
          <p className="text-slate-400 text-sm">Edit company details, headings, experience stats, and images</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-sm transition-all"
        >
          {saved ? <CheckCircle className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          <span>{saved ? 'Saved Successfully!' : 'Save Changes'}</span>
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300">Section Subtitle</label>
            <input
              type="text"
              value={formData.sectionSubtitle}
              onChange={(e) => setFormData({ ...formData, sectionSubtitle: e.target.value })}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300">Experience Counter Badge</label>
            <input
              type="text"
              value={formData.experienceYears}
              onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-medium text-slate-300">Main Heading</label>
            <input
              type="text"
              value={formData.mainHeading}
              onChange={(e) => setFormData({ ...formData, mainHeading: e.target.value })}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-medium text-slate-300">Company Description</label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
            />
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="border-t border-slate-800 pt-6 space-y-4">
          <h3 className="text-sm font-semibold text-amber-400">Key Features / Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 p-4 bg-slate-950 rounded-xl border border-slate-800">
              <label className="text-xs font-medium text-slate-300">Feature 1 Title</label>
              <input
                type="text"
                value={formData.reliabilityTitle}
                onChange={(e) => setFormData({ ...formData, reliabilityTitle: e.target.value })}
                className="w-full p-2 bg-slate-900 border border-slate-800 rounded-lg text-white text-sm"
              />
              <label className="text-xs font-medium text-slate-300">Feature 1 Description</label>
              <textarea
                rows={2}
                value={formData.reliabilityDesc}
                onChange={(e) => setFormData({ ...formData, reliabilityDesc: e.target.value })}
                className="w-full p-2 bg-slate-900 border border-slate-800 rounded-lg text-white text-sm"
              />
            </div>

            <div className="space-y-2 p-4 bg-slate-950 rounded-xl border border-slate-800">
              <label className="text-xs font-medium text-slate-300">Feature 2 Title</label>
              <input
                type="text"
                value={formData.supportTitle}
                onChange={(e) => setFormData({ ...formData, supportTitle: e.target.value })}
                className="w-full p-2 bg-slate-900 border border-slate-800 rounded-lg text-white text-sm"
              />
              <label className="text-xs font-medium text-slate-300">Feature 2 Description</label>
              <textarea
                rows={2}
                value={formData.supportDesc}
                onChange={(e) => setFormData({ ...formData, supportDesc: e.target.value })}
                className="w-full p-2 bg-slate-900 border border-slate-800 rounded-lg text-white text-sm"
              />
            </div>
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="border-t border-slate-800 pt-6 space-y-4">
          <h3 className="text-sm font-semibold text-amber-400">About Images</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Primary About Image</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.aboutImage1 || ''}
                  onChange={(e) => setFormData({ ...formData, aboutImage1: e.target.value })}
                  className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs"
                />
                <label className="cursor-pointer px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-medium flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span>{uploading === 'aboutImage1' ? '...' : 'Upload'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleUpload('aboutImage1', e)}
                  />
                </label>
              </div>
              {formData.aboutImage1 && (
                <img src={formData.aboutImage1} alt="Preview" className="h-32 w-full object-cover rounded-xl mt-2 border border-slate-800" />
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Secondary About Image</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.aboutImage2 || ''}
                  onChange={(e) => setFormData({ ...formData, aboutImage2: e.target.value })}
                  className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs"
                />
                <label className="cursor-pointer px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-medium flex items-center gap-1">
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span>{uploading === 'aboutImage2' ? '...' : 'Upload'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleUpload('aboutImage2', e)}
                  />
                </label>
              </div>
              {formData.aboutImage2 && (
                <img src={formData.aboutImage2} alt="Preview" className="h-32 w-full object-cover rounded-xl mt-2 border border-slate-800" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
