import { Calendar, Truck, Hammer, Recycle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    { icon: Calendar, title: "Выбор и оплата", desc: "Выбираете дерево и дату доставки — онлайн за 2 минуты" },
    { icon: Truck, title: "Доставка в день заказа", desc: "Аккуратно привозим в интервале 2 часа — без опозданий" },
    { icon: Hammer, title: "Установка и подрезка", desc: "Соберем подставку, подрежем ствол и установим идеально ровно" },
    { icon: Recycle, title: "Уборка после праздников", desc: "По запросу заберём и утилизируем ваше дерево" },
  ]

  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(20,184,166,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Как это работает</h2>
          <p className="text-emerald-100/80 mt-2">Все просто — мы делаем всё за вас</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="mx-auto h-12 w-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 flex items-center justify-center mb-4">
                <s.icon />
              </div>
              <h3 className="text-white font-semibold mb-1">{s.title}</h3>
              <p className="text-emerald-100/80 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
