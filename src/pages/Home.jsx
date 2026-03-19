import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { BusScene, VillageExploreScene, EveningPresentScene, TractorScene } from '../components/SceneIllustration'

const steps = [
  { num: '01', icon: '🚌', title: 'Otobüse Bin', desc: 'Seçilen girişimciler "Girişimci Köy" yazılı otobüse biner. Hedef: önceden ya da halk oylamasıyla belirlenen bir Anadolu köyü.' },
  { num: '02', icon: '🏡', title: 'Köyü Keşfet', desc: 'Gruplar halinde köyü gezerler. Köy okulu çocukları da gruplara katılır — çünkü köyü en iyi onlar bilir.' },
  { num: '03', icon: '👵', title: 'Dinle & Anla', desc: 'Gözleme teyze, traktördeki amca... Köylünün derdini dinlemek için her kapıyı çalarlar.' },
  { num: '04', icon: '💡', title: 'Çözüm Üret', desc: 'Gece boyu çalışarak köyün ihtiyacına yönelik bir icat, yenilik ya da proje geliştirirler.' },
  { num: '05', icon: '🎭', title: 'Sahneye Çık', desc: 'Otobüsün yanına kurulan sahnede, köylü jüri önünde sunum yapılır. Muhtar, dedeler, nineler karar verir.' },
  { num: '06', icon: '🏆', title: 'Kazanan Köylü', desc: 'Jüri en iyi çözümü seçer. Valentura & ortaklar o ihtiyacı hayata geçirmek için devreye girer.' },
]

export default function Home() {
  const revealRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    revealRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const addReveal = el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el) }

  return (
    <>
      <Helmet>
        <title>Girişimci Köy — Otobüse Bin, Köye Git, Fark Yarat</title>
        <meta name="description" content="Genç girişimcilerin Anadolu köylerine giderek gerçek sorunlara çözüm ürettiği TV programı ve girişimcilik organizasyonu." />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black"/>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 via-transparent to-brand-village/10"/>
        {/* Bus illustration */}
        <div className="absolute right-0 bottom-0 w-full md:w-2/3 opacity-30 md:opacity-50 pointer-events-none">
          <BusScene />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="section-tag mb-6 block">TV Programı & Girişimcilik Organizasyonu</span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-8 text-white">
              OTOBÜSEBİN
              <span className="block text-brand-red">KÖYE GİT</span>
              <span className="block text-brand-gold">FARK YARAT</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Genç ve başarılı girişimciler Anadolu'nun köylerine gidiyor. Gerçek sorunları dinliyor, çözümler üretiyor. Köylü jüri karar veriyor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/girisimci-basvuru" className="btn-primary">Girişimci Olarak Başvur</Link>
              <Link to="/koy-basvuru" className="btn-outline">Köyünüzü Kaydedin</Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs uppercase tracking-widest">
          <span>Keşfet</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse"/>
        </div>
      </section>

      {/* ===== FRAGMAN / TRAILER ===== */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addReveal} className="reveal text-center mb-12">
            <span className="section-tag mb-3 block">Tanıtım Filmi</span>
            <h2 className="font-display text-5xl md:text-6xl text-white">FRAGMANI İZLE</h2>
          </div>
          <div ref={addReveal} className="reveal relative max-w-4xl mx-auto aspect-video bg-zinc-900 rounded-none overflow-hidden border border-zinc-800 group cursor-pointer">
            {/* YouTube placeholder — ID buraya gelecek */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <EveningPresentScene/>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"/>
              <div className="absolute flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-brand-red/40">
                  <span className="text-3xl ml-1">▶</span>
                </div>
                <span className="text-white font-display text-2xl tracking-widest">GİRİŞİMCİ KÖY TANITIM</span>
                <span className="text-zinc-400 text-sm uppercase tracking-widest">Fragman yakında yayında</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NASIL ÇALIŞIR ===== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addReveal} className="reveal text-center mb-16">
            <span className="section-tag mb-3 block">Program Akışı</span>
            <h2 className="font-display text-5xl md:text-6xl text-white">NASIL ÇALIŞIR?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div ref={addReveal} key={i}
                className="reveal bg-zinc-950 border border-zinc-800 hover:border-brand-red/50 p-8 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-brand-red text-4xl leading-none">{s.num}</span>
                  <span className="text-4xl">{s.icon}</span>
                </div>
                <h3 className="font-display text-2xl text-white mb-3 group-hover:text-brand-red transition-colors">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SAHNELER ===== */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addReveal} className="reveal text-center mb-16">
            <span className="section-tag mb-3 block">Program Sahneleri</span>
            <h2 className="font-display text-5xl md:text-6xl text-white">PROGRAM İÇİNDEN</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div ref={addReveal} className="reveal scene-card aspect-video bg-zinc-900 overflow-hidden border border-zinc-800 hover:border-brand-red/50 transition-all">
              <BusScene />
              <div className="p-4 bg-zinc-950">
                <h3 className="font-display text-xl text-white">Yola Çıkış</h3>
                <p className="text-zinc-500 text-sm">Girişimci Köy otobüsü dağları, bayırları, sahilleri aşarak köye ulaşıyor.</p>
              </div>
            </div>
            <div ref={addReveal} className="reveal scene-card aspect-video bg-zinc-900 overflow-hidden border border-zinc-800 hover:border-brand-red/50 transition-all">
              <VillageExploreScene />
              <div className="p-4 bg-zinc-950">
                <h3 className="font-display text-xl text-white">Köy Keşfi</h3>
                <p className="text-zinc-500 text-sm">Gruplar köylüyle tanışıyor, sorunları dinliyor, çocuklarla birlikte geziyor.</p>
              </div>
            </div>
            <div ref={addReveal} className="reveal scene-card aspect-video bg-zinc-900 overflow-hidden border border-zinc-800 hover:border-brand-red/50 transition-all">
              <TractorScene />
              <div className="p-4 bg-zinc-950">
                <h3 className="font-display text-xl text-white">Tarlada Bilgi Toplama</h3>
                <p className="text-zinc-500 text-sm">Amcayla traktörde, teyzeyle gözleme tavasında... Gerçeği bulmak için her yerde.</p>
              </div>
            </div>
            <div ref={addReveal} className="reveal scene-card aspect-video bg-zinc-900 overflow-hidden border border-zinc-800 hover:border-brand-red/50 transition-all">
              <EveningPresentScene />
              <div className="p-4 bg-zinc-950">
                <h3 className="font-display text-xl text-white">Köy Meydanında Sunum</h3>
                <p className="text-zinc-500 text-sm">Otobüsün yanından kurulan sahne, köylü jürisi, meydan dolusu seyirci.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 bg-brand-red">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addReveal} className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '81', label: 'İl' },
              { n: '500+', label: 'Köy Adayı' },
              { n: '100+', label: 'Girişimci' },
              { n: '∞', label: 'Çözüm' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-6xl md:text-7xl text-white">{s.n}</div>
                <div className="text-white/70 uppercase tracking-widest text-xs mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BAŞVURU CTA ===== */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div ref={addReveal} className="reveal">
            <span className="section-tag mb-3 block">Katılmak İster Misin?</span>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-8">
              SEN DE<br />
              <span className="text-brand-red">BU MACERAYA</span><br />
              KATIL
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-12">
              Girişimci misin? Başvur, otobüse bin. Köy müdürüsün? Köyünü kaydet, biz gelelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/girisimci-basvuru" className="btn-primary text-center">
                🚀 Girişimci Olarak Başvur
              </Link>
              <Link to="/koy-basvuru" className="btn-outline text-center">
                🏡 Köyümüzü Kaydet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
