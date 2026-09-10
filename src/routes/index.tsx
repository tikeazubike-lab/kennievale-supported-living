import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";
import conservatory from "@/assets/aveline-conservatory.jpg";
import gardenPortrait from "@/assets/aveline-garden-portrait.jpg";
import tableDetail from "@/assets/aveline-table-detail.jpg";
import couple from "@/assets/aveline-couple.jpg";
import experience from "@/assets/aveline-experience.jpg";
import residence from "@/assets/aveline-residence.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aveline House | Considered Residential Care" },
      { name: "description", content: "Aveline House offers warm, personal residential care shaped around the life you choose." },
      { property: "og:title", content: "Aveline House | Considered Residential Care" },
      { property: "og:description", content: "Warm, personal residential care shaped around the life you choose." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["About", "Services", "Locations", "Experience", "Insights"];
const principles = [
  ["01", "Genuine hospitality", "A warm welcome, thoughtful meals and a home that never feels institutional."],
  ["02", "Calibre of care", "Experienced, compassionate people who know every resident as a person, never a file."],
  ["03", "Beautiful surroundings", "Light-filled rooms, considered interiors and gardens that invite you outside."],
  ["04", "Complete dignity", "Personal support that honours your independence, pace and preferences."],
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory text-ink antialiased">
      <header className="relative z-30 bg-ivory">
        <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-12">
          <a href="#top" className="flex items-baseline gap-2" aria-label="Aveline House home">
            <span className="font-serif text-3xl font-light">Aveline</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-ink-soft">House</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-ink-soft transition-colors hover:text-ink">{item}</a>)}
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden text-sm text-ink-soft hover:text-ink sm:block">Contact</a>
            <a href="#contact" className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-ivory transition-colors hover:bg-clay">Book a visit</a>
            <details className="group relative lg:hidden">
              <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-border" aria-label="Open navigation"><Menu className="size-5" /></summary>
              <nav className="absolute right-0 top-14 w-56 border border-border bg-ivory p-5 shadow-xl" aria-label="Mobile navigation">
                {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="block border-b border-border py-3 text-sm last:border-0">{item}</a>)}
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10 md:pb-32 lg:px-12">
          <div className="grid grid-cols-4 items-start gap-4 md:grid-cols-12 md:gap-6">
            <figure className="col-span-4 md:col-span-8 lg:col-span-7">
              <img src={conservatory} width={1440} height={960} fetchPriority="high" alt="Sunlit conservatory lounge overlooking landscaped gardens" className="aspect-[16/10] w-full object-cover" />
            </figure>
            <figure className="col-span-3 col-start-2 -mt-8 md:col-span-4 md:col-start-9 md:-mt-12 lg:-mt-20">
              <img src={gardenPortrait} width={912} height={1200} alt="A resident tending herbs in the walled garden" className="aspect-[3/4] w-full object-cover shadow-2xl" />
            </figure>
            <div className="col-span-4 -mt-2 border border-border bg-ivory p-7 md:col-span-7 md:col-start-2 md:-mt-32 md:p-10 lg:col-span-6 lg:-mt-40 lg:p-12">
              <p className="mb-6 text-xs uppercase tracking-[0.28em] text-clay">Residential care, reimagined</p>
              <h1 className="font-serif text-5xl font-light leading-[1.02] md:text-7xl lg:text-[5.5rem]">A home that feels <em className="font-normal">like yours</em></h1>
              <p className="mt-7 max-w-lg text-lg leading-8 text-ink-soft">Considered, unhurried living where every detail is placed with care—and every day is shaped around you.</p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <a href="#contact" className="rounded-full bg-ink px-7 py-4 text-sm font-medium text-ivory transition-colors hover:bg-clay">Book a visit</a>
                <a href="#experience" className="border-b border-ink/40 pb-1 text-sm font-medium hover:border-clay">Explore the house</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-ink text-ivory">
          <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-8 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-12">
            <p className="col-span-4 text-xs uppercase tracking-[0.28em] text-clay md:col-span-3">Our philosophy</p>
            <p className="col-span-4 font-serif text-3xl font-light leading-[1.18] md:col-span-9 md:text-5xl">We believe care should feel less like a service and more like being looked after by people who truly know you—unhurried, personal and quietly generous.</p>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid grid-cols-4 gap-10 md:grid-cols-12">
            <div className="col-span-4 md:col-span-5">
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-clay">What sets us apart</p>
              <h2 className="max-w-lg font-serif text-4xl font-light leading-[1.05] md:text-6xl">Four things we refuse to compromise</h2>
              <img src={tableDetail} width={1008} height={704} loading="lazy" alt="A thoughtfully laid dining table with flowers and candlelight" className="mt-10 aspect-[4/3] w-full object-cover" />
            </div>
            <div className="col-span-4 divide-y divide-border md:col-span-6 md:col-start-7 md:self-center">
              {principles.map(([number, title, text]) => (
                <article key={number} className="grid grid-cols-[3rem_1fr] gap-4 py-7 first:pt-0">
                  <span className="font-serif text-lg text-clay">{number}</span>
                  <div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-2 max-w-md text-base leading-7 text-ink-soft">{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="relative min-h-[78vh] overflow-hidden text-ivory">
          <img src={experience} width={1600} height={912} loading="lazy" alt="A resident and companion walking together through the estate gardens" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-ink/35" />
          <div className="relative mx-auto flex min-h-[78vh] max-w-[1440px] items-end px-5 py-16 md:px-10 md:py-24 lg:px-12">
            <div className="max-w-xl border-l border-ivory/60 pl-6 md:pl-10">
              <p className="mb-5 text-xs uppercase tracking-[0.28em]">Life at Aveline</p>
              <h2 className="font-serif text-5xl font-light leading-[1.04] md:text-7xl">Room for every kind of day</h2>
              <p className="mt-6 max-w-md text-lg leading-8">Company when you want it. Quiet when you don’t. And people nearby who understand the difference.</p>
            </div>
          </div>
        </section>

        <section id="locations" className="bg-parchment">
          <div className="mx-auto grid max-w-[1440px] grid-cols-4 gap-10 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-12">
            <div className="col-span-4 md:col-span-7">
              <img src={residence} width={1408} height={1008} loading="lazy" alt="Aveline House in its mature landscaped grounds" className="aspect-[7/5] w-full object-cover" />
            </div>
            <div className="col-span-4 self-center md:col-span-4 md:col-start-9">
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-clay">Our first residence</p>
              <h2 className="font-serif text-4xl font-light md:text-6xl">Aveline at Weston</h2>
              <p className="mt-6 text-lg leading-8 text-ink-soft">A light-filled country house set within twelve acres of gardens, just beyond the edge of the city.</p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-3 border-b border-ink/30 pb-2 text-sm font-medium">Discover Weston <ArrowRight className="size-4" /></a>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] grid-cols-4 items-center gap-10 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-12">
          <img src={couple} width={912} height={1104} loading="lazy" alt="A couple sharing a relaxed moment in the library" className="col-span-4 aspect-[4/5] w-full object-cover md:col-span-4" />
          <blockquote className="col-span-4 md:col-span-7 md:col-start-6">
            <span className="block font-serif text-7xl leading-none text-clay">“</span>
            <p className="-mt-5 font-serif text-3xl font-light leading-[1.2] md:text-5xl">The day Mum arrived, we sat in the garden until supper. Nothing was rushed. For the first time in months, we all exhaled.</p>
            <footer className="mt-8 text-sm text-ink-soft"><strong className="font-medium text-ink">Eleanor Whitmore</strong><br />Daughter of a resident</footer>
          </blockquote>
        </section>

        <section id="insights" className="border-y border-border bg-parchment">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 lg:px-12">
            <div className="mb-12 flex items-end justify-between gap-6"><div><p className="mb-4 text-xs uppercase tracking-[0.28em] text-clay">The Aveline journal</p><h2 className="font-serif text-4xl font-light md:text-6xl">Stories worth sharing</h2></div><a href="#" className="hidden border-b border-ink/30 pb-1 text-sm md:block">View all stories</a></div>
            <div className="grid gap-0 border-t border-border md:grid-cols-3">
              {[['Living well','The small rituals that make a new place feel familiar'],['From the kitchen','Why every good conversation begins at the table'],['People','Meet Ada, our head gardener and keeper of seasons']].map(([label,title], index) => <article key={title} className="border-b border-border py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="text-xs uppercase tracking-[0.22em] text-clay">0{index + 1} · {label}</span><h3 className="mt-5 font-serif text-2xl leading-tight md:text-3xl">{title}</h3><a href="#" className="mt-7 inline-flex items-center gap-3 text-sm">Read story <ArrowRight className="size-4" /></a></article>)}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-moss text-ivory">
          <div className="mx-auto max-w-[1440px] px-5 py-24 text-center md:px-10 md:py-32 lg:px-12">
            <p className="mb-8 text-xs uppercase tracking-[0.28em] text-stone">Come and see for yourself</p>
            <h2 className="mx-auto max-w-4xl font-serif text-4xl font-light leading-[1.08] md:text-7xl">We’d love to show you around, over a cup of tea</h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"><a href="mailto:hello@avelinehouse.co.uk" className="rounded-full bg-clay px-8 py-4 text-sm font-medium transition-colors hover:bg-ivory hover:text-ink">Book a visit</a><a href="tel:+441610000000" className="border-b border-ivory/40 pb-1 text-sm">Speak to our team</a></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-ivory">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-12">
          <div className="grid grid-cols-4 gap-10 md:grid-cols-12">
            <div className="col-span-4 md:col-span-5"><div className="flex items-baseline gap-2"><span className="font-serif text-3xl font-light">Aveline</span><span className="text-[10px] uppercase tracking-[0.28em] text-ink-soft">House</span></div><p className="mt-5 max-w-xs text-sm leading-7 text-ink-soft">Residential care built on hospitality, dignity and genuine human connection.</p></div>
            <div className="col-span-2 md:col-span-2"><p className="mb-4 text-xs uppercase tracking-[0.22em] text-ink-soft">Explore</p>{navItems.slice(0,3).map(item => <a key={item} href={`#${item.toLowerCase()}`} className="mb-3 block text-sm">{item}</a>)}</div>
            <div className="col-span-2 md:col-span-2"><p className="mb-4 text-xs uppercase tracking-[0.22em] text-ink-soft">More</p>{navItems.slice(3).map(item => <a key={item} href={`#${item.toLowerCase()}`} className="mb-3 block text-sm">{item}</a>)}</div>
            <div className="col-span-4 md:col-span-3"><p className="mb-4 text-xs uppercase tracking-[0.22em] text-ink-soft">Visit</p><p className="text-sm leading-7 text-ink-soft">18 Harbour Lane<br />Weston Quay, WY1 4AB<br /><a href="tel:+441610000000" className="text-ink">+44 161 000 0000</a></p></div>
          </div>
          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs text-ink-soft sm:flex-row"><p>© 2026 Aveline House. All rights reserved.</p><div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a></div></div>
        </div>
      </footer>
    </div>
  );
}
