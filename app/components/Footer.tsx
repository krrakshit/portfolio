// components/Footer.tsx
'use client';

import { useState } from 'react';
import Terminal from './Terminal';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Thank you for your feedback!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Something went wrong. Try again!');
    }
  };

  return (
    <>
   
    <footer className="p-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-2">Send me a message</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="p-2 rounded bg-gray-800 text-white"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 rounded bg-gray-800 text-white"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="p-2 rounded bg-gray-800 text-white"
            name="message"
            placeholder="Your Message or Query"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-2">{status}</p>}
      </div>
    </footer>
    <Terminal/>
    </>
  );
}
