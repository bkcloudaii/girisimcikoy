import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const initialForm = {
  ad: '', soyad: '', email: '', telefon: '', yas: '',
  sehir: '', linkedin: '', sirket: '', sektor: '',
  odulVar: '', odulDetay: '', projeAdi: '', projeAnlatim: '',
  nedenKatilmak: '', beklenti: ''
}

export default function GirisimciBasvuru() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('girisimci_basvurular') || '[]')
    const entry = { ...form, tarih: new Date().toISOString(), tip: 'girisimci', id: Date.now() }
    existing.push(entry)
    localStorage.setItem('girisimci_basvurular', JSON.stringify(existing))
    // Simulate email send
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="min-h-screen bg-black flex items-center justify-center pt-24">
      <div className="text-center max-w-xl px-6">
        <div className="text-7xl mb-8">🚌</div>
        <h2 className="font-display text-5xl text-white mb-4">BAŞVURUN ALINDI!</h2>
        <p className="text-zinc-400 mb-8">Değerlendirme sonucunda ekibimiz seninle iletişime geçecek. Otobüste görüşmek üzere!</p>
        <button onClick={() => { setSubmitted(false); setForm(initialForm) }} className="btn-primary">Yeni Başvuru</button>
      </div>
    </div>
  )

  return (
    <>
      <Helmet>
        <title>Girişimci Başvurusu — Girişimci Köy</title>
        <meta name="description" content="Girişimci Köy programına girişimci olarak başvurun. Anadolu'nun köylerine gidin, gerçek sorunlara çözüm üretin." />
      </Helmet>

      <section className="pt-32 pb-8 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <span className="section-tag mb-4 block">Başvuru Formu</span>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-none mb-4">
            GİRİŞİMCİ<br />
            <span className="text-brand-red">BAŞVURUSU</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Otobüse bin, köye git, fark yarat. Aşağıdaki formu doldur, seni değerlendirelim.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Kişisel Bilgiler */}
            <div>
              <h3 className="font-display text-2xl text-white mb-6 pb-3 border-b border-zinc-800">
                <span className="text-brand-red">01</span> — KİŞİSEL BİLGİLER
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Ad *</label>
                  <input className="input-field" placeholder="Adınız" value={form.ad} onChange={e => set('ad', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Soyad *</label>
                  <input className="input-field" placeholder="Soyadınız" value={form.soyad} onChange={e => set('soyad', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">E-posta *</label>
                  <input className="input-field" type="email" placeholder="email@ornek.com" value={form.email} onChange={e => set('email', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Telefon *</label>
                  <input className="input-field" placeholder="+90 5XX XXX XX XX" value={form.telefon} onChange={e => set('telefon', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Yaş *</label>
                  <input className="input-field" type="number" placeholder="25" min="18" max="45" value={form.yas} onChange={e => set('yas', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Şehir *</label>
                  <input className="input-field" placeholder="İstanbul" value={form.sehir} onChange={e => set('sehir', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">LinkedIn Profili</label>
                  <input className="input-field" placeholder="linkedin.com/in/..." value={form.linkedin} onChange={e => set('linkedin', e.target.value)} />
                </div>
              </div>
            </div>

            {/* Girişimcilik Bilgileri */}
            <div>
              <h3 className="font-display text-2xl text-white mb-6 pb-3 border-b border-zinc-800">
                <span className="text-brand-red">02</span> — GİRİŞİMCİLİK DENEYİMİ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Şirket / Proje Adı *</label>
                  <input className="input-field" placeholder="Şirketinizin adı" value={form.sirket} onChange={e => set('sirket', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Sektör *</label>
                  <select className="input-field" value={form.sektor} onChange={e => set('sektor', e.target.value)} required>
                    <option value="">Sektör seçin...</option>
                    <option>Teknoloji / Yazılım</option>
                    <option>Tarım / Gıda</option>
                    <option>Sağlık</option>
                    <option>Eğitim</option>
                    <option>Enerji / Çevre</option>
                    <option>Fintech</option>
                    <option>E-ticaret</option>
                    <option>Sosyal Girişim</option>
                    <option>Üretim / Sanayi</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Ödülünüz var mı? *</label>
                  <select className="input-field" value={form.odulVar} onChange={e => set('odulVar', e.target.value)} required>
                    <option value="">Seçin...</option>
                    <option value="evet">Evet, ödülüm var</option>
                    <option value="hayir">Henüz yok</option>
                  </select>
                </div>
                {form.odulVar === 'evet' && (
                  <div>
                    <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Ödül Detayı</label>
                    <input className="input-field" placeholder="Hangi ödül, hangi organizasyon..." value={form.odulDetay} onChange={e => set('odulDetay', e.target.value)} />
                  </div>
                )}
              </div>
            </div>

            {/* Motivasyon */}
            <div>
              <h3 className="font-display text-2xl text-white mb-6 pb-3 border-b border-zinc-800">
                <span className="text-brand-red">03</span> — MOTİVASYON
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Köye götürmek istediğin fikir / proje *</label>
                  <input className="input-field" placeholder="Kısaca proje adı veya fikir" value={form.projeAdi} onChange={e => set('projeAdi', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Projeyi anlat *</label>
                  <textarea className="input-field resize-none" rows="4" placeholder="Fikrin nasıl bir sorunu çözüyor? Köylere ne faydası olabilir?" value={form.projeAnlatim} onChange={e => set('projeAnlatim', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Neden katılmak istiyorsun? *</label>
                  <textarea className="input-field resize-none" rows="3" placeholder="Seni bu programda görmek için bize bir neden ver..." value={form.nedenKatilmak} onChange={e => set('nedenKatilmak', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Beklentin ne?</label>
                  <textarea className="input-field resize-none" rows="2" placeholder="Programdan ne bekliyorsun?" value={form.beklenti} onChange={e => set('beklenti', e.target.value)} />
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full text-center text-base py-5 disabled:opacity-50">
              {loading ? '⏳ Gönderiliyor...' : '🚌 Başvuruyu Gönder'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
