function Quotes() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center">
        <div className="relative">
          <img
            src="src/assets/fotbar.jpg"
            alt="Fotbar"
            className="w-full max-h-[420px] object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <blockquote className="text-white font-bold text-2xl md:text-3xl leading-snug drop-shadow-lg">
              "PAK DONI KAPAN ACC KRSNYAAAAAA"
            </blockquote>
          </div>
        </div>

        <p className="text-zinc-300 mt-6 text-sm italic">
          - suara hati dari kami pejuang 3.5 semesters
        </p>

      </div>
    </div>
  );
}

export default Quotes;
