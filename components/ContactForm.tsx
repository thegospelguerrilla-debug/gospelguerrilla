'use client';

import { useState, FormEvent } from 'react';
import CTAButton from './CTAButton';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const formId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot
    if (formData.get('website')) {
      setStatus('success');
      return;
    }

    if (!formId) {
      setErrorMsg('Form not configured yet. Please email us directly for now.');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        setErrorMsg(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again in a moment.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <h3 className="text-3xl font-black tracking-tight mb-4 text-[#FF5A6D]">Message received.</h3>
        <p className="text-lg mb-6">Thank you. A real person will read this and get back to you as soon as possible.</p>
        <p className="text-[#a3a3a3]">While you wait, read the Gospel again on the homepage. It’s the only thing that actually changes people.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name">Name (optional)</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email">Email <span className="text-[#FF5A6D]">*</span></label>
          <input type="email" id="email" name="email" required placeholder="you@example.com" />
        </div>
      </div>

      <div>
        <label htmlFor="category">This is about…</label>
        <select id="category" name="category" required>
          <option value="">Choose one</option>
          <option value="I want to know if God is real">I want to know if God is real</option>
          <option value="I’m struggling with sin / addiction">I’m struggling with sin or addiction</option>
          <option value="The Bible confuses me">The Bible confuses me</option>
          <option value="I prayed and nothing changed">I prayed and nothing changed</option>
          <option value="I’m angry at God / the church">I’m angry at God or the church</option>
          <option value="I just prayed the prayer on the homepage">I just prayed the prayer on the homepage</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message">Your message <span className="text-[#FF5A6D]">*</span></label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Say whatever you actually need to say. No judgment here."
        />
      </div>

      <label htmlFor="followup" className="flex items-start gap-2 text-sm text-[#c1c1c1] cursor-pointer">
        <input type="checkbox" id="followup" name="followup" className="mt-1.5 accent-[#FF5A6D]" />
        I want someone to personally follow up with me (email or message).
      </label>

      <input type="hidden" name="_subject" value="Reach Out / Questions — GospelGuerrilla" />

      {/* Honeypot */}
      <input type="text" name="website" className="hp" tabIndex={-1} autoComplete="off" />

      <div className="pt-2">
        <CTAButton type="submit" variant="primary" className="w-full text-lg" disabled={status === 'loading'}>
          {status === 'loading' ? 'SENDING...' : 'SEND MY MESSAGE'}
        </CTAButton>
      </div>

      {status === 'error' && (
        <p className="text-[#ef4444] text-sm text-center">{errorMsg}</p>
      )}
    </form>
  );
}
