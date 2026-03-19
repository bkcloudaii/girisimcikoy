import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [loc])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center">
            <span className="text-white text-lg font-display">GK</span>
          </div>
          <span className="font-display text-2xl tracking-wider text-white group-hover:text-brand-red transition-colors">
            GİRİŞİMCİ KÖY
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/format" className="text-zinc-400 hover:text-white text-sm uppercase tracking-widest transition-colors">Format</Link>
          <Link to="/girisimci-basvuru" className="text-zinc-400 hover:text-white text-sm uppercase tracking-widest transition-colors">Girişimci Başvurusu</Link>
          <Link to="/koy-basvuru" className="text-zinc-400 hover:text-white text-sm uppercase tracking-widest transition-colors">Köy Başvurusu</Link>
          <Link to="/girisimci-basvuru" className="btn-primary text-sm py-3 px-6">Hemen Başvur</Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800 px-6 py-6 flex flex-col gap-6">
          <Link to="/format" className="text-zinc-300 uppercase tracking-widest text-sm">Format</Link>
          <Link to="/girisimci-basvuru" className="text-zinc-300 uppercase tracking-widest text-sm">Girişimci Başvurusu</Link>
          <Link to="/koy-basvuru" className="text-zinc-300 uppercase tracking-widest text-sm">Köy Başvurusu</Link>
          <Link to="/girisimci-basvuru" className="btn-primary text-center">Hemen Başvur</Link>
        </div>
      )}
    </nav>
  )
}
