import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center">
                <span className="text-white font-display text-lg">GK</span>
              </div>
              <span className="font-display text-2xl tracking-wider">GİRİŞİMCİ KÖY</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Genç girişimcilerin köylerin gerçek sorunlarına çözüm ürettiği TV programı ve girişimcilik organizasyonu.
            </p>
          </div>
          <div>
            <h4 className="text-zinc-300 uppercase tracking-widest text-xs mb-6">Sayfalar</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-zinc-500 hover:text-white text-sm transition-colors">Ana Sayfa</Link>
              <Link to="/format" className="text-zinc-500 hover:text-white text-sm transition-colors">Program Formatı</Link>
              <Link to="/girisimci-basvuru" className="text-zinc-500 hover:text-white text-sm transition-colors">Girişimci Başvurusu</Link>
              <Link to="/koy-basvuru" className="text-zinc-500 hover:text-white text-sm transition-colors">Köy Başvurusu</Link>
            </div>
          </div>
          <div>
            <h4 className="text-zinc-300 uppercase tracking-widest text-xs mb-6">İletişim</h4>
            <div className="flex flex-col gap-3 text-zinc-500 text-sm">
              <a href="mailto:hello@valentura.com" className="hover:text-white transition-colors">hello@valentura.com</a>
              <span>Valentura Teknoloji ve Yatırım A.Ş.</span>
              <span>Türkiye</span>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
          <span>© 2026 Girişimci Köy — Valentura Teknoloji ve Yatırım A.Ş. Tüm hakları saklıdır.</span>
          <span>Format & Marka Tescili: Valentura</span>
        </div>
      </div>
    </footer>
  )
}
