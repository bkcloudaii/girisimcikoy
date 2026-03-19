import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BusScene, EveningPresentScene } from '../components/SceneIllustration'

export default function Format() {
  return (
    <>
      <Helmet>
        <title>Program Formatı — Girişimci Köy</title>
        <meta name="description" content="Girişimci Köy TV ve YouTube program formatı detayları. Yayın formatı, içerik yapısı ve organizasyon bilgileri." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20"><BusScene /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="section-tag mb-4 block">Program Formatı</span>
          <h1 className="font-display text-6xl md:text-8xl text-white leading-none">
            FORMAT<br />
            <span className="text-brand-red">TANITIMI</span>
          </h1>
        </div>
      </section>

      {/* Format özeti */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-tag mb-4 block">Ne Bu Program?</span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-8">TV & YOUTUBE İÇİN ULUSLARARASI FORMAT</h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>Girişimci Köy, geleneksel yayın kanallarında ve YouTube'da yayınlanmak üzere tasarlanmış, Valentura tarafından format hakkı tescil edilmiş özgün bir programdır.</p>
                <p>Genç, başarılı ve ödüllü girişimciler "Girişimci Köy" yazılı bir otobüse binerek Anadolu'nun farklı köylerine gider. Her bölüm farklı bir köyde geçer; köy ya önceden belirlenir ya da izleyici oylamasıyla seçilir.</p>
                <p>Program hem bir girişimcilik yarışması hem de sosyal etki belgeseli formatındadır.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Format Türü', value: 'Reality / Girişimcilik Yarışması' },
                { label: 'Yayın Platformu', value: 'TV (Geleneksel) + YouTube' },
                { label: 'Bölüm Süresi', value: '45-60 dakika (TV) / 25-35 dk (YouTube)' },
                { label: 'Sezon Başına', value: '8-12 bölüm' },
                { label: 'Çekim Süresi', value: 'Her bölüm 2 gün' },
                { label: 'Format Hakkı', value: 'Valentura Teknoloji ve Yatırım A.Ş.' },
                { label: 'Uluslararası Uyarlama', value: 'Lisans müsait' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-zinc-800">
                  <span className="text-zinc-500 text-sm uppercase tracking-widest">{item.label}</span>
                  <span className="text-white font-medium text-sm text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bölüm yapısı */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-3 block">Bölüm Yapısı</span>
            <h2 className="font-display text-4xl md:text-5xl text-white">BİR BÖLÜM NASIL GEÇİYOR?</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-red/30 hidden md:block"/>
            <div className="space-y-8">
              {[
                { gün: 'GÜN 1 / SABAH', baslik: 'Yola Çıkış & Varış', icon: '🚌', icerik: 'Otobüs katılımcıları alır. Yolculuk boyunca tanışma, strateji, motivasyon. Köy meydanına varış. Muhtar karşılama.' },
                { gün: 'GÜN 1 / ÖĞLE', baslik: 'Köy Keşfi & Grup Çalışması', icon: '🏡', icerik: 'Gruplar (4-5 girişimci + 1 köy çocuğu) köyü gezer. Sorunları not eder. Köylülerle sohbet. Tarlada, evlerde, okullarda…' },
                { gün: 'GÜN 1 / AKŞAM', baslik: 'Sunum Hazırlığı', icon: '💻', icerik: 'Otobüs yanına kurulan çadır alanlarında gruplar çalışır. Köylünün derdine çözüm geliştirirler. Kimi gece boyu çalışır.' },
                { gün: 'GÜN 1 / GECE', baslik: 'Köy Misafirliği', icon: '🌙', icerik: 'Köylüler girişimcileri evlerinde ağırlar. Yemek, sohbet, köy atmosferi. Gerçek bağlar kurulur.' },
                { gün: 'GÜN 2 / SABAH', baslik: 'Son Araştırma & Hazırlık', icon: '🔍', icerik: 'Son bilgi toplama turu. Sunum materyallerinin son hali. Güzel vakit geçirme, köy ile kaynaşma.' },
                { gün: 'GÜN 2 / AKŞAM', baslik: 'Büyük Gece — Sunum & Jüri', icon: '🎭', icerik: 'Köy meydanı sahneye dönüşür. Otobüs perdesinden açılan sahnede sunumlar yapılır. Köylü jürisi (muhtar, dedeler, nineler) puanlar. Kazanan belirlenir.' },
                { gün: 'SONRASI', baslik: 'Gerçeğe Dönüşüm', icon: '🚀', icerik: 'Valentura ve iş ortakları, kazanan fikri hayata geçirmek için harekete geçer. Devlet kurumları, STK\'lar, özel sektörle koordinasyon.' },
              ].map((step, i) => (
                <div key={i} className="relative flex gap-8 md:pl-16">
                  <div className="absolute left-4 top-3 w-9 h-9 bg-brand-red flex items-center justify-center text-xs font-bold hidden md:flex">{i+1}</div>
                  <div className="flex-1 bg-zinc-900 border border-zinc-800 p-6 hover:border-brand-red/40 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{step.icon}</span>
                      <div>
                        <span className="text-brand-red text-xs uppercase tracking-widest">{step.gün}</span>
                        <h3 className="font-display text-xl text-white">{step.baslik}</h3>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.icerik}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sahne görseli */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-video max-w-4xl mx-auto overflow-hidden">
            <EveningPresentScene />
          </div>
          <p className="text-center text-zinc-500 text-sm mt-4 uppercase tracking-widest">Köy Meydanında Büyük Gece — Sunum Sahnesi</p>
        </div>
      </section>

      {/* Kanal/Sponsor CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-tag mb-4 block">İş Birliği</span>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">YAYINCI mi, SPONSOR mu?</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Format lisansı, yayın hakkı ve sponsorluk anlaşmaları için bizimle iletişime geçin. Uluslararası uyarlama hakları da müsaittir.
          </p>
          <a href="mailto:hello@valentura.com?subject=Girişimci Köy — İş Birliği Talebi" className="btn-primary">
            hello@valentura.com'a Yaz
          </a>
        </div>
      </section>
    </>
  )
}
