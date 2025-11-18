import { useState } from "react"
import { Phone, Clock, MapPin } from "lucide-react"

export default function CTA() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", time: "" })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="lead" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(20,184,166,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Оформите доставку</h3>
              <p className="text-emerald-100/80 mt-2">Оставьте контакты — менеджер свяжется в течение 10 минут</p>

              <form onSubmit={onSubmit} className="mt-6 space-y-3">
                <div>
                  <label className="block text-sm text-emerald-100/80 mb-1">Имя</label>
                  <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full bg-emerald-900/40 border border-emerald-700/50 rounded-lg px-3 py-2 text-white placeholder:text-emerald-200/50" placeholder="Алексей" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-100/80 mb-1">Телефон</label>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-800/60 border border-emerald-700/50 text-emerald-200">
                      <Phone size={18} />
                    </div>
                    <input required value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="w-full bg-emerald-900/40 border border-emerald-700/50 rounded-lg px-3 py-2 text-white placeholder:text-emerald-200/50" placeholder="+7 (999) 000-00-00" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-emerald-100/80 mb-1">Адрес</label>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-800/60 border border-emerald-700/50 text-emerald-200">
                      <MapPin size={18} />
                    </div>
                    <input required value={form.address} onChange={(e)=>setForm({...form, address:e.target.value})} className="w-full bg-emerald-900/40 border border-emerald-700/50 rounded-lg px-3 py-2 text-white placeholder:text-emerald-200/50" placeholder="Москва, Тверская 1" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-emerald-100/80 mb-1">Удобное время</label>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-800/60 border border-emerald-700/50 text-emerald-200">
                      <Clock size={18} />
                    </div>
                    <input value={form.time} onChange={(e)=>setForm({...form, time:e.target.value})} className="w-full bg-emerald-900/40 border border-emerald-700/50 rounded-lg px-3 py-2 text-white placeholder:text-emerald-200/50" placeholder="Сегодня 18:00–20:00" />
                  </div>
                </div>

                <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold px-4 py-3 rounded-lg transition-colors mt-2">
                  Оформить заказ
                </button>
              </form>

              {sent && (
                <p className="text-emerald-200 mt-3">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
              )}
            </div>

            <div className="md:w-1/2">
              <div className="h-full rounded-xl bg-[url('https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center min-h-[260px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
