import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Catalog from "./components/Catalog"
import HowItWorks from "./components/HowItWorks"
import CTA from "./components/CTA"

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Catalog />
      <HowItWorks />
      <CTA />

      <footer className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-emerald-100/80">© 2025 Ёлочный Дом. Все права защищены.</p>
          <div className="text-emerald-100/60 text-sm">Свежие живые новогодние елки, сосны и пихты Нордмана и Фрейзера с доставкой</div>
        </div>
      </footer>
    </div>
  )
}

export default App
