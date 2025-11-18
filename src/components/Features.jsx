import { Leaf, ShieldCheck, Trophy, Recycle, CheckCircle2 } from "lucide-react"

export default function Features() {
  const items = [
    { icon: Leaf, title: "Экологично", desc: "Сертифицированные плантации, бережный уход и ответственная рубка" },
    { icon: ShieldCheck, title: "Свежесть гарантируем", desc: "Срез в день доставки и влажная упаковка сохраняют аромат и иголочки" },
    { icon: Trophy, title: "Отборные деревья", desc: "Только правильная форма и пышность — класс Премиум и Экстра" },
    { icon: Recycle, title: "Заберем после праздников", desc: "Утилизация по договоренности — привезём мешки для хвои" },
  ]

  return (
    <section id="benefits" className="relative py-20 bg-gradient-to-b from-transparent to-emerald-950/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(20,184,166,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Почему нас выбирают</h2>
          <p className="text-emerald-100/80 mt-3">Тысячи счастливых семей уже встречают Новый год с нашими деревьями</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 flex items-center justify-center mb-4">
                <it.icon />
              </div>
              <h3 className="text-white font-semibold mb-1">{it.title}</h3>
              <p className="text-emerald-100/80 text-sm">{it.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-emerald-300 text-xs">
                <CheckCircle2 size={14} /> Проверено 2025
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
