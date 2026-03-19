import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Format from './pages/Format'
import GirisimciBasvuru from './pages/GirisimciBasvuru'
import KoyBasvuru from './pages/KoyBasvuru'
import Admin from './pages/Admin'

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/format" element={<Format />} />
        <Route path="/girisimci-basvuru" element={<GirisimciBasvuru />} />
        <Route path="/koy-basvuru" element={<KoyBasvuru />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  )
}
