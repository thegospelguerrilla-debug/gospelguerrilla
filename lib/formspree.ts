/**
 * Simple Formspree submission helper.
 * Usage:
 *   const result = await submitToFormspree('your-form-id', formData);
 */

export async function submitToFormspree(formId: string, data: FormData) {
  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.error || 'Form submission failed');
  }

  return response.json();
}
