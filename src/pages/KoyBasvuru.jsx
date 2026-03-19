import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const initialForm = {
  muhtarAd: '', email: '', telefon: '',
  koyAdi: '', il: '', ilce: '', nufus: '',
  okul: '', okulOgrenci: '',
  anasorun1: '', anasorun2: '', anasorun3: '',
  sorunDetay: '', koyAnlatim: '',
  ulasim: '', konaklama: '', hazirlik: ''
}

export default function KoyBasvuru() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const existing = JSON.parse(localStorage.getItem('koy_basvurular') || '[]')
    const entry = { ...form, tarih: new Date().toISOString(), tip: 'koy', id: Date.now() }
    existing.push(entry)
    localStorage.setItem('koy_basvurular', JSON.stringify(existing))
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="min-h-screen bg-black flex items-center justify-center pt-24">
      <div className="text-center max-w-xl px-6">
        <div className="text-7xl mb-8">🏡</div>
        <h2 className="font-display text-5xl text-white mb-4">KÖY KAYIT ALINDI!</h2>
        <p className="text-zinc-400 mb-8">Köyünüz değerlendirme listesine alındı. Rota belirlendiğinde sizinle iletişime geçeceğiz. Misafirperverliğiniz için şimdiden teşekkürler!</p>
        <button onClick={() => { setSubmitted(false); setForm(initialForm) }} className="btn-primary">Yeni Kayıt</button>
      </div>
    </div>
  )

  return (
    <>
      <Helmet>
        <title>Köy Başvurusu — Girişimci Köy</title>
        <meta name="description" content="Girişimci Köy programı için köyünüzü kaydettirin. Genç girişimciler köyünüze gelsin, sorunlarınıza çözüm üretsin." />
      </Helmet>

      <section className="pt-32 pb-8 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <span className="section-tag mb-4 block">Köy Kayıt Formu</span>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-none mb-4">
            KÖY<br />
            <span className="text-brand-village">BAŞVURUSU</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Köyünüzün sorunlarına çözüm bulmak için girişimcileri davet edin. Biz gelelim, birlikte düşünelim.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* İletişim */}
            <div>
              <h3 className="font-display text-2xl text-white mb-6 pb-3 border-b border-zinc-800">
                <span className="text-brand-village">01</span> — İLETİŞİM BİLGİLERİ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Muhtar / Yetkili Kişi Adı Soyadı *</label>
                  <input className="input-field" placeholder="Ad Soyad" value={form.muhtarAd} onChange={e => set('muhtarAd', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">E-posta *</label>
                  <input className="input-field" type="email" placeholder="muhtar@koy.gov.tr" value={form.email} onChange={e => set('email', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Telefon *</label>
                  <input className="input-field" placeholder="+90 5XX XXX XX XX" value={form.telefon} onChange={e => set('telefon', e.target.value)} required />
                </div>
              </div>
            </div>

            {/* Köy Bilgileri */}
            <div>
              <h3 className="font-display text-2xl text-white mb-6 pb-3 border-b border-zinc-800">
                <span className="text-brand-village">02</span> — KÖY BİLGİLERİ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Köy Adı *</label>
                  <input className="input-field" placeholder="Köyünüzün adı" value={form.koyAdi} onChange={e => set('koyAdi', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">İl *</label>
                  <input className="input-field" placeholder="Örn: Muğla" value={form.il} onChange={e => set('il', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">İlçe *</label>
                  <input className="input-field" placeholder="Örn: Ortaca" value={form.ilce} onChange={e => set('ilce', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Nüfus (yaklaşık)</label>
                  <input className="input-field" placeholder="Örn: 350" value={form.nufus} onChange={e => set('nufus', e.target.value)} />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Köyde okul var mı?</label>
                  <select className="input-field" value={form.okul} onChange={e => set('okul', e.target.value)}>
                    <option value="">Seçin...</option>
                    <option>Evet, ilkokul var</option>
                    <option>Evet, ortaokul da var</option>
                    <option>Okul yok, yakın köyde var</option>
                    <option>Okul yok</option>
                  </select>
                </div>
                {form.okul && form.okul !== 'Okul yok' && (
                  <div>
                    <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Okul öğrenci sayısı</label>
                    <input className="input-field" placeholder="Örn: 24" value={form.okulOgrenci} onChange={e => set('okulOgrenci', e.target.value)} />
                  </div>
                )}
                <div className="md:col-span-2">
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Köyünüzü tanıtın *</label>
                  <textarea className="input-field resize-none" rows="3" placeholder="Köyünüzün özellikleri, tarihçesi, günlük hayatı..." value={form.koyAnlatim} onChange={e => set('koyAnlatim', e.target.value)} required />
                </div>
              </div>
            </div>

            {/* Sorunlar */}
            <div>
              <h3 className="font-display text-2xl text-white mb-6 pb-3 border-b border-zinc-800">
                <span className="text-brand-village">03</span> — KÖYÜN SORUNLARI
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Ana Sorun 1 *</label>
                  <input className="input-field" placeholder="En önemli sorun" value={form.anasorun1} onChange={e => set('anasorun1', e.target.value)} required />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Ana Sorun 2</label>
                  <input className="input-field" placeholder="İkinci önemli sorun" value={form.anasorun2} onChange={e => set('anasorun2', e.target.value)} />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Ana Sorun 3</label>
                  <input className="input-field" placeholder="Üçüncü sorun" value={form.anasorun3} onChange={e => set('anasorun3', e.target.value)} />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Sorunları detaylı anlat *</label>
                  <textarea className="input-field resize-none" rows="5" placeholder="Köyünüzün sorunlarını, ihtiyaçlarını ve neden bu programa katılmak istediğinizi anlatın..." value={form.sorunDetay} onChange={e => set('sorunDetay', e.target.value)} required />
                </div>
              </div>
            </div>

            {/* Lojistik */}
            <div>
              <h3 className="font-display text-2xl text-white mb-6 pb-3 border-b border-zinc-800">
                <span className="text-brand-village">04</span> — LOJİSTİK
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Köye ulaşım nasıl?</label>
                  <select className="input-field" value={form.ulasim} onChange={e => set('ulasim', e.target.value)}>
                    <option value="">Seçin...</option>
                    <option>Asfalt yol, her araç girer</option>
                    <option>Asfalt yol, bazı bölümler zorlu</option>
                    <option>Toprak/taş yol, normal araç girer</option>
                    <option>Zorlu yol, özel araç gerekebilir</option>
                  </select>
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">15-20 kişilik grup için konaklama sağlanabilir mi?</label>
                  <select className="input-field" value={form.konaklama} onChange={e => set('konaklama', e.target.value)}>
                    <option value="">Seçin...</option>
                    <option>Evet, evlerde misafir edebiliriz</option>
                    <option>Evet, köy evi / misafirhane var</option>
                    <option>Kısmen, yakın ilçede pansiyon var</option>
                    <option>Hayır, konaklama sağlanamaz</option>
                  </select>
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Hazırlık için eklemek istediğiniz bir şey var mı?</label>
                  <textarea className="input-field resize-none" rows="2" placeholder="Ek notlar..." value={form.hazirlik} onChange={e => set('hazirlik', e.target.value)} />
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full text-center text-base py-5 disabled:opacity-50"
              style={{ background: '#2D6A4F' }}>
              {loading ? '⏳ Gönderiliyor...' : '🏡 Köyümüzü Kaydet'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
