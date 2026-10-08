import PageHero from '../components/sections/PageHero.jsx'
import PillLink from '../components/ui/PillLink.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <>
      <PageHero title="Page not found" subtitle="Sorry, we couldn't find the page you were looking for." />
      <section className="bg-white py-20 text-center">
        <PillLink to="/" variant="purple" className="mx-auto">
          Back to home <i className="ri-arrow-right-line" />
        </PillLink>
      </section>
    </>
  )
}
