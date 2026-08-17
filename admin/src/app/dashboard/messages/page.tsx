'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, User, MessageSquare } from 'lucide-react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: string;
}

export default function MessagesDashboardPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content/contact')
      .then((res) => res.json())
      .then((data) => {
        if (data.messages) setMessages(data.messages);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white">Form Inquiries & Messages</h2>
        <p className="text-slate-400 text-sm">View messages submitted by website visitors through the contact form</p>
      </div>

      {loading ? (
        <div className="p-8 text-center text-slate-400">Loading messages...</div>
      ) : messages.length === 0 ? (
        <div className="p-12 text-center bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
          <MessageSquare className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="text-base font-semibold text-slate-300">No Messages Yet</h3>
          <p className="text-xs text-slate-500">Contact form submissions from the website will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{msg.name}</h4>
                    <span className="text-xs text-amber-400 font-medium">{msg.subject || 'Website Inquiry'}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(msg.createdAt).toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <a href={`mailto:${msg.email}`} className="hover:text-amber-400 transition-colors">
                    {msg.email}
                  </a>
                </div>
                {msg.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <a href={`tel:${msg.phone}`} className="hover:text-amber-400 transition-colors">
                      {msg.phone}
                    </a>
                  </div>
                )}
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/60 text-slate-300 text-sm leading-relaxed">
                {msg.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
