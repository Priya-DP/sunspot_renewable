const API_BASE = 'http://localhost:3000/api/content';

export async function fetchHomeContent() {
  try {
    const res = await fetch(`${API_BASE}/home?t=${Date.now()}`, { cache: 'no-store' });
    const data = await res.json();
    return data.slides || [];
  } catch (err) {
    console.warn('API call failed:', err);
    return null;
  }
}

export async function fetchAboutContent() {
  try {
    const res = await fetch(`${API_BASE}/about?t=${Date.now()}`, { cache: 'no-store' });
    const data = await res.json();
    return data.about || null;
  } catch (err) {
    console.warn('API call failed:', err);
    return null;
  }
}

export async function fetchServicesContent() {
  try {
    const res = await fetch(`${API_BASE}/services?t=${Date.now()}`, { cache: 'no-store' });
    const data = await res.json();
    return data.services || null;
  } catch (err) {
    console.warn('API call failed:', err);
    return null;
  }
}

export async function fetchProjectsContent() {
  try {
    const res = await fetch(`${API_BASE}/projects?t=${Date.now()}`, { cache: 'no-store' });
    const data = await res.json();
    return data.projects || null;
  } catch (err) {
    console.warn('API call failed:', err);
    return null;
  }
}

export async function fetchTeamContent() {
  try {
    const res = await fetch(`${API_BASE}/team?t=${Date.now()}`, { cache: 'no-store' });
    const data = await res.json();
    return data.teamMembers || null;
  } catch (err) {
    console.warn('API call failed:', err);
    return null;
  }
}

export async function fetchContactContent() {
  try {
    const res = await fetch(`${API_BASE}/contact?t=${Date.now()}`, { cache: 'no-store' });
    const data = await res.json();
    return data.contact || null;
  } catch (err) {
    console.warn('API call failed:', err);
    return null;
  }
}

export async function submitContactMessage(formData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    return await res.json();
  } catch (err) {
    console.error('Failed to submit contact message:', err);
    return { error: 'Network error' };
  }
}
