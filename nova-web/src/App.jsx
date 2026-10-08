import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import SiteFooter from './components/layout/SiteFooter.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Outreach from './pages/Outreach.jsx'
import JoinUs from './pages/JoinUs.jsx'
import Contact from './pages/Contact.jsx'
import Donate from './pages/Donate.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
