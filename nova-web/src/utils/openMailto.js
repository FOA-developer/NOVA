// Builds a mailto: link from form fields and opens the user's mail app.
// `fields` is an ordered object of { Label: value }; empty values are skipped.
// Subject and body are URL-encoded so spaces, line breaks (%0D%0A) and
// special characters (&, etc.) survive.
export function openMailto({ to, subject, fields }) {
  const body = Object.entries(fields)
    .filter(([, value]) => value != null && String(value).trim() !== '')
    .map(([label, value]) => `${label}: ${value}`)
    .join('\r\n')

  const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = url
}
