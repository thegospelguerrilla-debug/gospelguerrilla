'use client';

import { useState, FormEvent } from 'react';
import CTAButton from './CTAButton';

export default function PrayerForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const formId = process.env.NEXT_PUBLIC_FORMSPREE_PRAYER;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot
    if (formData.get('website')) {
      setStatus('success'); // silently succeed for bots
      return;
    }

    if (!formId) {
      setErrorMsg('Form not configured yet. Please contact us directly for now.');
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
        <h3 className="text-3xl font-black tracking-tight mb-4 text-[#FF5A6D]">We’ve got you.</h3>
        <p className="text-lg mb-6">Your request has been received. Real people are praying for you right now.</p>
        <p className="text-[#a3a3a3] mb-6">Life is heavy. You don’t have to carry it alone.</p>
        <CTAButton href="/reach" variant="secondary">I also want to talk to someone</CTAButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name">Name (optional — you can stay anonymous)</label>
        <input type="text" id="name" name="name" placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="request">What’s going on? <span className="text-[#FF5A6D]">*</span></label>
        <textarea
          id="request"
          name="request"
          required
          placeholder="Be real. No one here is shocked by anything."
        />
      </div>

      <div>
        <label htmlFor="category">I especially need prayer for… (optional)</label>
        <select id="category" name="category">
          <option value="">Select one</option>
          <option value="Salvation / I want to know God">Salvation — I want to know God</option>
          <option value="Addiction / Strongholds">Addiction or strongholds</option>
          <option value="Depression / Anxiety / Mental health">Depression, anxiety, mental health</option>
          <option value="Family / Relationships">Family or relationships</option>
          <option value="Direction / Decisions">Direction or big decisions</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <input type="hidden" name="_subject" value="Prayer Request — GospelGuerrilla" />

      {/* Honeypot */}
      <input type="text" name="website" className="hp" tabIndex={-1} autoComplete="off" />

      <div className="pt-2">
        <CTAButton type="submit" variant="primary" className="w-full text-lg" disabled={status === 'loading'}>
          {status === 'loading' ? 'SENDING YOUR REQUEST...' : 'ASK FOR PRAYER'}
        </CTAButton>
      </div>

      {status === 'error' && (
        <p className="text-[#ef4444] text-sm text-center">{errorMsg}</p>
      )}

      <p className="text-xs text-center text-[#737373]">
        This is private. We will never publish or spam you.
      </p>
    </form>
  );
}
