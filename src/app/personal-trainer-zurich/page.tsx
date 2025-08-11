import Image from "next/image";

import ServiceCard from "./service-card";
import CtaLink from "./cta-links";

export const revalidate = 3600;

export const metadata = {
  title: "Personal Trainer in Zurich | Science-Driven Fat Loss & Longevity",
  description: "Elite personal training in Zurich focused on fat loss, performance, and longevity. Evidence-based coaching and diagnostics.",
  alternates: { canonical: "https://relysian.ch/personal-trainer-zurich" },
  openGraph: {
    type: "website",
    url: "https://relysian.ch/personal-trainer-zurich",
    title: "Personal Trainer in Zurich",
    description: "Science-driven personal training for fat loss and longevity in Zurich.",
    images: ["/images/relysian-logo-2.png"],
  },
  twitter: { card: "summary_large_image" },
};

const PersonalTrainingZurichPage = () => {
  return (
    <div className="relative font-sans min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://relysian.ch/wp-content/uploads/2025/03/relysian_personal_training.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
      </div>

      <main className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <section className="text-center sm:text-left">
          <h1 className="text-[#00D8D8] text-5xl sm:text-7xl font-semibold leading-tight">Personal Trainer Zurich</h1>
          <p className="mt-4 text-2xl sm:text-3xl text-white/90">Science-Driven Fitness & Longevity</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
            <CtaLink
              kind="book"
              label="Book a Consult"
              location="hero"
              className="flex items-center justify-center rounded-full border border-white bg-white py-3 px-6 w-[230px] text-gray-800 text-xl hover:bg-blue-500 hover:text-white transition"
            />
            <CtaLink
              kind="custom"
              label="How It Works"
              location="hero"
              className="flex items-center justify-center rounded-full border border-white bg-white/20 py-3 px-6 w-[230px] text-white text-xl hover:bg-white hover:text-gray-800 transition"
            />
          </div>
        </section>
        <section className="mt-14 grid gap-3 text-white/90 sm:max-w-3xl">
          <ul className="grid sm:grid-cols-3 gap-3 text-center sm:text-left">
            <li>✔ Evidence-based coaching</li>
            <li>✔ Strength & rehab friendly</li>
            <li>✔ Metabolic & longevity focus</li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl text-white/95 font-semibold">What we do</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <ServiceCard title="Fat Loss" desc="Sustainable body recomposition and nutrition." href="/services#fat-loss" />
            <ServiceCard title="Strength & Rehab" desc="Progressive strength with injury-aware programming." href="/services#strength-rehab" />
            <ServiceCard title="Longevity" desc="Muscle, cardio, mobility, sleep & recovery." href="/services#longevity" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl text-white/95 font-semibold">Packages</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <PriceCard name="Starter" note="2× / week" />
            <PriceCard name="Intensive" note="3× / week" />
            <PriceCard name="Executive" note="Custom plan" />
          </div>
          <div className="flex mt-6 gap-8">
            <CtaLink
              kind="book"
              label="Get a plan"
              location="packages"
              className="inline-flex rounded-full border border-white bg-white/10 text-white px-6 py-3 hover:bg-white hover:text-gray-800 transition cursor-pointer"
            />
            <CtaLink
              kind="call"
              label="Call"
              location="footer"
              className="inline-flex rounded-full border border-white bg-white/10 text-white px-6 py-3 hover:bg-white hover:text-gray-800 transition cursor-pointer"
            />
            <CtaLink
              kind="whatsapp"
              label="WhatsApp"
              location="footer"
              className="inline-flex rounded-full border border-white bg-white/10 text-white px-6 py-3 hover:bg-white hover:text-gray-800 transition cursor-pointer"
            />
            <CtaLink
              kind="simplybook"
              label="Book via SimplyBook"
              location="hero"
              className="inline-flex rounded-full border border-white bg-white/10 text-white px-6 py-3 hover:bg-white hover:text-gray-800 transition cursor-pointer"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl text-white/95 font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-3">
            <FaqItem q="How many sessions per week?" a="Most clients train 2–3× per week, depending on goals and schedule." />
            <FaqItem q="Do you work with injuries?" a="Yes, we adapt programming and coordinate with your physio when needed." />
            <FaqItem q="Which languages?" a="English and German; Italian on request." />
            <FaqItem q="Where in Zurich?" a="City center and surrounding areas; enquire for exact locations." />
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How many sessions per week?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most clients train 2–3× per week, depending on goals and schedule.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with injuries?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we adapt programming and coordinate with your physio when needed.",
                },
              },
              {
                "@type": "Question",
                name: "Which languages?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "English and German; Italian on request.",
                },
              },
              {
                "@type": "Question",
                name: "Where in Zurich?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "City center and surrounding areas; enquire for exact locations.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Relysian",
            url: "https://relysian.ch",
            image: "https://relysian.ch/logo.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Zurich",
              addressCountry: "CH",
            },
            telephone: "+41 00 000 00 00",
            sameAs: ["https://www.instagram.com/personaltrainingzurich/", "https://www.facebook.com/profile.php?id=61556465727180", "http://www.linkedin.com/in/carlo-k-copeta-b96754152"],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://relysian.ch/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Personal Trainer Zurich",
                item: "https://relysian.ch/personal-trainer-zurich",
              },
            ],
          }),
        }}
      />
    </div>
  );
};

function PriceCard({ name, note }: { name: string; note: string }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/5 p-5">
      <div className="text-xl text-white/95 font-semibold">{name}</div>
      <p className="mt-1 text-white/80">{note}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-white/20 bg-white/5 p-5">
      <summary className="cursor-pointer text-white/95 text-lg">{q}</summary>
      <p className="mt-2 text-white/80">{a}</p>
    </details>
  );
}

export default PersonalTrainingZurichPage;
