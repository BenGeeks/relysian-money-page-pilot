import Image from "next/image";
import Link from "next/link";

import SectionContainer from "@/app/components/section-container";
import PageContainer from "@/app/components/page-container";

const Home = () => {
  return (
    <PageContainer imgUrl="/images/home_hero.jpg">
      <SectionContainer>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-col items-center gap-3 text-[#00D8D8] font-semibold">
            <h1 className="text-7xl">Personal Training Zurich</h1>
            <h1 className="text-7xl">Science-Driven Fitness & Longevity</h1>
          </div>
          <div className="flex flex-col items-center gap-3 mt-8">
            <h2 className="text-5xl"> We Take Challenges</h2>
            <h2 className="text-5xl">Others Consider Impossible</h2>
          </div>
          <div className="justify-self-end flex items-center gap-6 mt-6">
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-full border border-white bg-white py-3 w-[230px] text-gray-800 text-2xl hover:bg-blue-500 hover:text-white transition"
            >
              Waiting List
            </Link>
            <Link
              href="/best-fat-loss-zurich"
              className="flex items-center justify-center rounded-full border border-white bg-white/20 py-3 w-[230px] text-white text-2xl hover:bg-white hover:text-gray-800 transition"
            >
              How It Works
            </Link>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="bg-white text-center">
        <div className="mx-auto max-w-screen-lg px-6">
          <h1 className="text-4xl sm:text-[42px] font-semibold text-black leading-tight [text-wrap:balance]">Optimize Your Health & Extend Your Lifespan</h1>
          <h2 className="mt-6 text-xl sm:text-4xl text-black leading-relaxed max-w-[70ch] mx-auto [text-wrap:balance] p-4">
            Unlock the power of advanced diagnostics, personalized health plans, expert nutrition guidance, and swiss certified personal trainers in Zurich.
          </h2>
          <h1 className="mt-8 text-4xl sm:text-[42px] font-semibold text-black leading-tight [text-wrap:balance]">With Relysian, you don’t just train — you evolve.</h1>
        </div>
      </SectionContainer>
      <SectionContainer className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mx-10 place-items-center">
            <div className="flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight [text-wrap:balance]">Start your journey with Relysian</h2>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-[65ch] [text-wrap:balance]">
                The leader in personal training Zurich. Gain tailored insights and advanced solutions to enhance health, accelerate fat loss, and boost longevity.
              </p>
              <Link
                href="/best-fat-loss-zurich"
                className="inline-flex items-center justify-center rounded-full border border-white bg-white/20 py-2 px-6 text-white text-xl hover:bg-white hover:text-gray-800 transition"
              >
                Extend Your Lifespan
              </Link>
            </div>

            <div className="relative w-full min-h-[460px] md:min-h-[560px] rounded-2xl overflow-hidden">
              <Image src="/images/precision_diagnostics_bg_img.webp" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="z-0 object-cover object-center opacity-30" aria-hidden />
              <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 p-6 sm:p-10 h-full min-h-[460px] md:min-h-[560px]">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight [text-wrap:balance]">Precision Diagnostics — Early Risk Detection</h2>
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-[65ch] [text-wrap:balance]">
                  Stay ahead with AI-powered diagnostics by BHS Biohacking Swiss AI. Detect risks early, boost health with Zurich nutrition experts, and train with Swiss-certified personal trainers
                  for longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default Home;
