'use client';

import { useState, useEffect } from 'react';
import { Save, CheckCircle, Phone, Mail, MapPin, Clock, Map } from 'lucide-react';

interface ContactInfo {
  id?: number;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  mapUrl: string;
}

export default function ContactDashboardPage() {
  const [formData, setFormData] = useState<ContactInfo>({
    phone: '+91-9094179527/9103',
    email: 'sunspotengineering@gmail.com',
    address: 'S.No 8, Ponneri High Road, Manali New Town, Tamil Nadu-600 103',
    workingHours: '7/24',
    mapUrl: '',
  });

  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/content/contact')
      .then((res) => res.json())
      .then((data) => {
        if (data.contact) setFormData(data.contact);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    try {
      const res = await fetch('/api/content/contact', {
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

  if (loading) return <div className="p-8 text-center text-slate-400">Loading Contact information...</div>;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Contact Section Manager</h2>
          <p className="text-slate-400 text-sm">Update company phone numbers, email, physical address, and map embed URL</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-sm transition-all"
        >
          {saved ? <CheckCircle className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          <span>{saved ? 'Saved Successfully!' : 'Save Contact Info'}</span>
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Contact Phone Numbers</span>
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91-9094179527/9103"
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Contact Email</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="sunspotengineering@gmail.com"
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-medium text-slate-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Physical Address</span>
            </label>
            <textarea
              rows={3}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Full office address..."
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Working Hours Badge</span>
            </label>
            <input
              type="text"
              value={formData.workingHours}
              onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
              placeholder="Call Us 7/24"
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 flex items-center gap-2">
              <Map className="w-4 h-4 text-amber-400" />
              <span>Google Maps Embed URL</span>
            </label>
            <input
              type="text"
              value={formData.mapUrl}
              onChange={(e) => setFormData({ ...formData, mapUrl: e.target.value })}
              placeholder="https://www.google.com/maps/embed?..."
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
