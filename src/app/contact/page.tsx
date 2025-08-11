import Image from "next/image";

export default function Home() {
  return (
    <div className="relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
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
          <div className="text-[#00D8D8]  font-semibold flex flex-col items-center gap-3">
            <h1 className="text-5xl">Get started on your longevity journey</h1>
          </div>
          <div className=" flex flex-col items-center gap-3 mt-8">
            <h2 className="text-2xl">Please share your contact information so we can get in touch</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
