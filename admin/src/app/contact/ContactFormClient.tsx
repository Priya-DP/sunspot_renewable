'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    try {
      setSubmitting(true);
      setError('');
      const res = await fetch('/api/content/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setError(data.error || 'Failed to submit message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6 shadow-2xl">
      <div>
        <h2 className="text-xl font-bold text-white">Send Us A Message</h2>
        <p className="text-slate-400 text-xs mt-1">Fill out the form below to request a solar quote or project consultation.</p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 shrink-0" />
          <div>
            <h3 className="font-bold text-sm text-white">Thank You! Message Received.</h3>
            <p className="text-xs text-emerald-300">Our engineering team has received your message and will respond shortly.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Your Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. John Doe"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs focus:border-emerald-500 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs focus:border-emerald-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91-9876543210"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs focus:border-emerald-500 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Subject / Service Needed</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Commercial Rooftop Solar Quote"
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs focus:border-emerald-500 outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-300">Message / Inquiry Details *</label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your power requirements, location, or solar project details..."
              className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs focus:border-emerald-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
          >
            <Send className="w-4 h-4" />
            <span>{submitting ? 'Submitting Message...' : 'Send Inquiry Message'}</span>
          </button>
        </form>
      )}
    </div>
  );
}
