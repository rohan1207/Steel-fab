/**
 * Forms POST to /api/send-form.
 * For static/Vite hosting, set VITE_SEND_FORM_URL to your deployed backend API
 * (e.g. cPanel Node app URL).
 */
export function getSendFormEndpoint() {
  const u = import.meta.env.VITE_SEND_FORM_URL
  if (u && String(u).trim()) return String(u).trim().replace(/\/$/, '')
  return '/api/send-form'
}
