import { useEffect } from 'react'

// Sets document.title. Pass a bare title for subpages (becomes "… — NOVA"),
// or nothing for the Home page (just "NOVA").
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — NOVA` : 'NOVA'
  }, [title])
}
