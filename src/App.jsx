import React, { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, ShoppingBag, ChevronRight, ArrowRight, Sparkles } from 'lucide-react'

function Navbar() {
  const links = useMemo(() => [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#shop' },
    { name: 'New Arrivals', href: '#new' },
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
  ], [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/30 border border-white/40 shadow-[0_0_1px_0_rgba(255,255,255,0.6),0_1px_40px_-10px_rgba(124,58,237,0.35)] rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-400 via-violet-400 to-sky-400 shadow-inner" />
              <span className="font-semibold tracking-tight">ÉCLAT</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="text-sm text-slate-800/80 hover:text-slate-900 transition-colors">
                  {l.name}
                </a>
              ))}
              <button className="relative group inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2">
                <ShoppingBag className="h-4 w-4" />
                <span className="text-sm">Cart</span>
                <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-fuchsia-500 text-[10px] grid place-items-center shadow-lg">2</span>
              </button>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 shadow-sm" aria-label="menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FloatingCard({ title, subtitle, price, image, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative rounded-3xl p-5 bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_0_1px_0_rgba(255,255,255,0.7),0_30px_80px_-20px_rgba(99,102,241,0.35)]"
    >
      <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-white/60 to-white/10 grid place-items-center">
        <img src={image} alt={title} className="w-3/4 h-auto drop-shadow-2xl" />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <p className="text-slate-900 font-medium">{title}</p>
          <p className="text-slate-600 text-sm">{subtitle}</p>
        </div>
        <span className="text-slate-900 font-semibold">{price}</span>
      </div>
    </motion.div>
  )
}

function Hero() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [1, 1, 0.2])

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(168,85,247,0.2),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(99,102,241,0.18),transparent)]" />

      <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/0 to-white" />

      <div className="relative z-10 pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 px-3 py-1 text-xs text-slate-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-violet-500" />
              Limited drop — THE FRAGRANCE OF CREATIVITY
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900">
              Futuristic fashion for the modern muse
            </h1>
            <p className="mt-6 text-slate-700 text-lg leading-relaxed">
              A premium curation of apparel, accessories, and scents. Photoreal depth, glowing accents, and a seamless shopping flow — crafted for an elevated digital experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#shop" className="group inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3">
                Shop the Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#collections" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/40 px-5 py-3 text-slate-900">
                Explore Lookbook
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FloatingCard
              title="Aurora Runner"
              subtitle="Iridescent Sneaker"
              price="$240"
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
              delay={0.1}
            />
            <FloatingCard
              title="Halo Tote"
              subtitle="Glass-Gloss Finish"
              price="$320"
              image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop"
              delay={0.2}
            />
            <FloatingCard
              title="Prism Shades"
              subtitle="UV Reactive"
              price="$180"
              image="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop"
              delay={0.3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function NewArrivals() {
  const items = [
    {
      title: 'Velvet Line Jacket',
      tag: 'New',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
      price: '$420',
    },
    {
      title: 'Nebula Knit',
      tag: 'Limited',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
      price: '$260',
    },
    {
      title: 'Iris Heel',
      tag: 'Restock',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      price: '$350',
    },
  ]

  return (
    <section id="new" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_30%,rgba(236,72,153,0.12),transparent),radial-gradient(600px_300px_at_90%_20%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">New Arrivals</h2>
            <p className="mt-2 text-slate-600">Curated drops with cinematic detail and immaculate materials.</p>
          </div>
          <a href="#shop" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3">
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/40 backdrop-blur-xl shadow-[0_0_1px_0_rgba(255,255,255,0.7),0_40px_120px_-30px_rgba(14,165,233,0.25)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/80 via-white/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/40 px-3 py-1 text-xs text-slate-700 shadow-sm">
                    {it.tag}
                  </div>
                  <p className="mt-3 text-slate-900 font-medium">{it.title}</p>
                </div>
                <span className="text-slate-900 font-semibold">{it.price}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Collections() {
  return (
    <section id="collections" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_10%,rgba(167,139,250,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/40 backdrop-blur-xl shadow-[0_0_1px_0_rgba(255,255,255,0.7),0_50px_140px_-40px_rgba(236,72,153,0.25)]">
              <img src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop" alt="Collection" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Cinematic silhouettes, luminous textures</h3>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Discover modular pieces designed with precision and presence. Clean lines, pastel gradients, and glowing accents meet functional luxury.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3">
                Shop now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/40 px-5 py-3 text-slate-900">
                Our story
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-12">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_10%,rgba(20,184,166,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-600">© {new Date().getFullYear()} ÉCLAT — All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-700">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 text-slate-900">
      <Navbar />
      <Hero />
      <NewArrivals />
      <Collections />
      <Footer />
    </div>
  )
}
