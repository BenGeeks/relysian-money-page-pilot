export default function Home() {
  return (
    <div className="relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="absolute inset-0 bg-[url('https://relysian.ch/wp-content/uploads/2025/03/relysian_personal_training.jpg')] bg-cover bg-center opacity-20"></div>

      <main className="relative flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-3">
          <div className="text-[#00D8D8] text-5xl font-semibold flex flex-col items-center gap-3">
            <h1>Get started on your longevity journey</h1>
          </div>
          <div className="text-2xl flex flex-col items-center gap-3 mt-8">
            <h2>Please share your contact information so we can get in touch</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
