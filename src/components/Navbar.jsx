import { Phone, ShoppingCart, TreePine, Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 to-transparent pointer-events-none" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur">
              <TreePine className="text-emerald-300" size={22} />
            </div>
            <div>
              <p className="text-white font-semibold leading-tight">Ёлочный Дом</p>
              <p className="text-emerald-200/80 text-xs -mt-0.5">живые ели, сосны, пихты</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-emerald-100/90 hover:text-white transition-colors">Каталог</a>
            <a href="#benefits" className="text-emerald-100/90 hover:text-white transition-colors">Почему мы</a>
            <a href="#how" className="text-emerald-100/90 hover:text-white transition-colors">Как это работает</a>
            <a href="#reviews" className="text-emerald-100/90 hover:text-white transition-colors">Отзывы</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+79990000000" className="group inline-flex items-center gap-2 text-emerald-50">
              <div className="h-9 w-9 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                <Phone size={18} />
              </div>
              <div className="text-right leading-none">
                <p className="text-xs text-emerald-200/80">Звоните</p>
                <p className="font-semibold">+7 999 000-00-00</p>
              </div>
            </a>
            <a href="#catalog" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold px-4 py-2 rounded-lg transition-colors shadow">
              <ShoppingCart size={18} />
              Заказать доставку
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-white">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 bg-emerald-900/70 border border-emerald-700/50 rounded-xl backdrop-blur p-3 space-y-2">
            <a href="#catalog" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-emerald-50 hover:bg-emerald-800/60">Каталог</a>
            <a href="#benefits" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-emerald-50 hover:bg-emerald-800/60">Почему мы</a>
            <a href="#how" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-emerald-50 hover:bg-emerald-800/60">Как это работает</a>
            <a href="#reviews" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-emerald-50 hover:bg-emerald-800/60">Отзывы</a>
            <a href="tel:+79990000000" className="block px-3 py-2 rounded-lg text-emerald-50 hover:bg-emerald-800/60">+7 999 000-00-00</a>
          </div>
        )}
      </nav>
    </header>
  )
}
