import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const ADMIN_PASS = '262626'

export default function Admin() {
  const [auth, setAuth] = useState(false)
  const [pw, setPw] = useState('')
  const [pwErr, setPwErr] = useState(false)
  const [tab, setTab] = useState('girisimci')
  const [girisimciler, setGirisimciler] = useState([])
  const [koyler, setKoyler] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (auth) {
      setGirisimciler(JSON.parse(localStorage.getItem('girisimci_basvurular') || '[]'))
      setKoyler(JSON.parse(localStorage.getItem('koy_basvurular') || '[]'))
    }
  }, [auth])

  const login = e => {
    e.preventDefault()
    if (pw === ADMIN_PASS) { setAuth(true); setPwErr(false) }
    else { setPwErr(true) }
  }

  const deleteEntry = (tip, id) => {
    if (!confirm('Silmek istediğinizden emin misiniz?')) return
    if (tip === 'girisimci') {
      const updated = girisimciler.filter(x => x.id !== id)
      localStorage.setItem('girisimci_basvurular', JSON.stringify(updated))
      setGirisimciler(updated)
    } else {
      const updated = koyler.filter(x => x.id !== id)
      localStorage.setItem('koy_basvurular', JSON.stringify(updated))
      setKoyler(updated)
    }
    setSelected(null)
  }

  if (!auth) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Helmet><title>Admin — Girişimci Köy</title></Helmet>
      <div className="w-full max-w-sm px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center">
            <span className="text-white font-display">GK</span>
          </div>
          <span className="font-display text-2xl tracking-wider text-white">ADMIN PANELİ</span>
        </div>
        <form onSubmit={login} className="space-y-4">
          <div>
            <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">Şifre</label>
            <input
              className="input-field"
              type="password"
              placeholder="••••••"
              value={pw}
              onChange={e => setPw(e.target.value)}
              autoFocus
            />
            {pwErr && <p className="text-brand-red text-xs mt-2">Hatalı şifre.</p>}
          </div>
          <button type="submit" className="btn-primary w-full">Giriş Yap</button>
        </form>
      </div>
    </div>
  )

  const activeData = tab === 'girisimci' ? girisimciler : koyler
  const stats = {
    girisimci: girisimciler.length,
    koy: koyler.length,
    bugun: [...girisimciler, ...koyler].filter(x => new Date(x.tarih).toDateString() === new Date().toDateString()).length,
  }

  return (
    <>
      <Helmet><title>Admin Paneli — Girişimci Köy</title></Helmet>
      <div className="min-h-screen bg-zinc-950 pt-20">
        {/* Admin Header */}
        <div className="bg-black border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-red flex items-center justify-center">
              <span className="text-white font-display text-sm">GK</span>
            </div>
            <span className="font-display text-xl tracking-wider text-white">ADMIN PANELİ</span>
          </div>
          <button onClick={() => setAuth(false)} className="text-zinc-500 text-sm hover:text-white transition-colors">Çıkış</button>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Girişimci Başvurusu', value: stats.girisimci, color: 'text-brand-red' },
              { label: 'Köy Kaydı', value: stats.koy, color: 'text-brand-village' },
              { label: 'Bugün Gelen', value: stats.bugun, color: 'text-brand-gold' },
            ].map((s, i) => (
              <div key={i} className="bg-black border border-zinc-800 p-6">
                <div className={`font-display text-5xl ${s.color} mb-2`}>{s.value}</div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex border-b border-zinc-800 mb-6">
            {[
              { key: 'girisimci', label: `Girişimciler (${stats.girisimci})` },
              { key: 'koy', label: `Köyler (${stats.koy})` },
            ].map(t => (
              <button key={t.key}
                onClick={() => { setTab(t.key); setSelected(null) }}
                className={`px-6 py-3 text-sm uppercase tracking-widest transition-colors border-b-2 ${tab === t.key ? 'text-white border-brand-red' : 'text-zinc-500 border-transparent hover:text-zinc-300'}`}>
                {t.label}
              </button>
            ))}
          </div>

          {activeData.length === 0 ? (
            <div className="text-center py-20 text-zinc-500">
              <div className="text-5xl mb-4">{tab === 'girisimci' ? '🚌' : '🏡'}</div>
              <p>Henüz başvuru yok.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* List */}
              <div className="lg:col-span-1 space-y-2">
                {activeData.map((item, i) => (
                  <div key={item.id}
                    onClick={() => setSelected(item)}
                    className={`p-4 border cursor-pointer transition-all ${selected?.id === item.id ? 'border-brand-red bg-zinc-900' : 'border-zinc-800 bg-black hover:border-zinc-600'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white text-sm font-medium">
                          {tab === 'girisimci' ? `${item.ad} ${item.soyad}` : item.koyAdi}
                        </p>
                        <p className="text-zinc-500 text-xs mt-1">
                          {tab === 'girisimci' ? item.sirket : `${item.il} / ${item.ilce}`}
                        </p>
                      </div>
                      <span className="text-zinc-600 text-xs">{new Date(item.tarih).toLocaleDateString('tr-TR')}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detail */}
              <div className="lg:col-span-2">
                {selected ? (
                  <div className="bg-black border border-zinc-800 p-6">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="font-display text-2xl text-white">
                        {tab === 'girisimci' ? `${selected.ad} ${selected.soyad}` : selected.koyAdi}
                      </h3>
                      <button onClick={() => deleteEntry(tab, selected.id)}
                        className="text-xs text-zinc-600 hover:text-red-500 transition-colors border border-zinc-800 px-3 py-1">
                        Sil
                      </button>
                    </div>
                    <div className="space-y-3">
                      {Object.entries(selected)
                        .filter(([k]) => !['id', 'tip'].includes(k))
                        .map(([k, v]) => v ? (
                          <div key={k} className="flex gap-4 py-2 border-b border-zinc-900">
                            <span className="text-zinc-600 text-xs uppercase tracking-widest w-32 shrink-0 pt-0.5">{k}</span>
                            <span className="text-zinc-300 text-sm break-all">{v}</span>
                          </div>
                        ) : null)}
                    </div>
                  </div>
                ) : (
                  <div className="bg-black border border-zinc-800 p-12 text-center text-zinc-600">
                    <p>Detay görmek için bir kayıt seçin.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
