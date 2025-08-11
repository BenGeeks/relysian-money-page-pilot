import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 overflow-hidden">
      <Image
        src="https://relysian.ch/wp-content/uploads/2025/03/relysian_personal_training.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center opacity-20"
      />

      <main className="relative flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-3">
          <div className="text-[#00D8D8] text-7xl font-semibold flex flex-col items-center gap-3">
            <h1>Personal Training Zurich</h1>
            <h1>Science-Driven Fitness & Longevity</h1>
          </div>
          <div className="text-5xl flex flex-col items-center gap-3 mt-8">
            <h2>We Take Challenges</h2>
            <h2>Others Consider Impossible</h2>
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
      </main>
    </div>
  );
}
