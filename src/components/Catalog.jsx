import { useState } from "react"
import { ShoppingCart, Ruler, Sprout } from "lucide-react"

const products = [
  { id: 1, title: "Пихта Нордмана", type: "fir", height: "120–150 см", price: 5490, img: "https://images.unsplash.com/photo-1606530962386-b6472609e411?q=80&w=1600&auto=format&fit=crop" },
  { id: 2, title: "Пихта Фрейзера", type: "fir", height: "150–180 см", price: 7490, img: "https://images.unsplash.com/photo-1513791054936-cad47f5c84a7?q=80&w=1600&auto=format&fit=crop" },
  { id: 3, title: "Ель классическая", type: "spruce", height: "170–200 см", price: 4690, img: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?q=80&w=1600&auto=format&fit=crop" },
  { id: 4, title: "Сосна ароматная", type: "pine", height: "150–180 см", price: 3990, img: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=1600&auto=format&fit=crop" },
]

export default function Catalog() {
  const [filter, setFilter] = useState("all")

  const filtered = products.filter(p => filter === "all" ? true : p.type === filter)

  return (
    <section id="catalog" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(20,184,166,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Каталог деревьев</h2>
            <p className="text-emerald-100/80 mt-2">От премиум-пихт до классических елей — выберите свой идеал</p>
          </div>
          <div className="inline-flex bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <button onClick={() => setFilter("all")} className={`px-4 py-2 text-sm ${filter==="all"?"bg-emerald-500 text-emerald-950":"text-emerald-100/90"}`}>Все</button>
            <button onClick={() => setFilter("fir")} className={`px-4 py-2 text-sm ${filter==="fir"?"bg-emerald-500 text-emerald-950":"text-emerald-100/90"}`}>Пихта</button>
            <button onClick={() => setFilter("spruce")} className={`px-4 py-2 text-sm ${filter==="spruce"?"bg-emerald-500 text-emerald-950":"text-emerald-100/90"}`}>Ель</button>
            <button onClick={() => setFilter("pine")} className={`px-4 py-2 text-sm ${filter==="pine"?"bg-emerald-500 text-emerald-950":"text-emerald-100/90"}`}>Сосна</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(item => (
            <div key={item.id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="relative">
                <img src={item.img} alt={item.title} className="h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 text-emerald-100 bg-emerald-500/20 backdrop-blur border border-emerald-400/30 rounded-lg px-3 py-1 text-xs">
                  <Ruler size={14} /> {item.height}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-emerald-100/80 text-sm flex items-center gap-1 mt-1"><Sprout size={14} /> Пышная крона, устойчивый аромат</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-2xl font-bold text-emerald-300">{item.price.toLocaleString('ru-RU')} ₽</p>
                  <a href="#lead" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold px-4 py-2 rounded-lg transition-colors">
                    <ShoppingCart size={18} /> Заказать
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
