import { motion } from "framer-motion"
import { Snowflake, Truck, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_0%_80%,rgba(34,197,94,0.15),transparent_40%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Snowflakes */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-10 left-[10%] animate-float-slow text-emerald-200/40">
          <Snowflake size={20} />
        </div>
        <div className="absolute top-20 left-[60%] animate-float text-cyan-200/40">
          <Snowflake size={14} />
        </div>
        <div className="absolute top-1/2 left-[80%] animate-float text-emerald-100/30">
          <Snowflake size={24} />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 text-emerald-200 bg-emerald-500/10 ring-1 ring-emerald-400/30 rounded-full px-3 py-1 text-sm mb-4">
                <Sparkles size={16} /> Новогодние деревья с доставкой за 2 часа
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                Живые ели, сосны и пихты Нордмана и Фрейзера
              </h1>
              <p className="mt-4 text-emerald-100/90 text-lg">
                Пышные, ароматные, устойчивые. Отборные деревья напрямую с плантаций. Выбирайте онлайн — привезём и установим в удобное время.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#catalog" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold px-6 py-3 transition-colors shadow-lg">
                  Выбрать ёлку
                </a>
                <a href="#benefits" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 transition-colors ring-1 ring-white/20">
                  Почему мы?
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-emerald-100/90">
                <div className="flex items-center gap-2">
                  <Truck className="text-emerald-300" size={18} />
                  Доставка день-в-день
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="text-emerald-300" size={18} />
                  Установка и уборка
                </div>
                <div className="flex items-center gap-2">
                  <Snowflake className="text-emerald-300" size={18} />
                  Хранение до праздника
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-10 bg-gradient-to-br from-emerald-800/40 to-slate-900/40 border border-emerald-500/20 rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1512389098783-66b81f86e199?q=80&w=1600&auto=format&fit=crop" alt="Новогодняя ёлка" className="rounded-2xl object-cover w-full h-[320px] sm:h-[440px]" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
