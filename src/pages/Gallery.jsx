import photos from "../data/gallery";

function Gallery() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 pt-28 pb-20">
      
      <h1 className="text-4xl font-bold text-white mb-12 text-center">
        Foto Aib SIGERS
      </h1>

        <div className="absolute top-10 left-0 w-screen overflow-hidden opacity-10 pointer-events-none">
          <div className="marquee-text text-[140px] font-extrabold text-white whitespace-nowrap">
            Foto Aib &nbsp; Foto Aib &nbsp; Foto Aib &nbsp; Foto Aib &nbsp; Foto Aib
          </div>
        </div>

      <div
        className="
          columns-1
          sm:columns-2
          md:columns-3
          lg:columns-4
          xl:columns-5
          2xl:columns-6
          gap-6
          space-y-6
        "
      >
        
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid relative group overflow-hidden rounded-2xl"
          >
            <a href={photo.src} target="_blank" rel="noopener noreferrer">
              <img
                src={photo.src}
                alt={photo.caption}
                className="
                  w-full
                  rounded-2xl
                  transition duration-700 ease-out
                  group-hover:scale-110
                  group-hover:brightness-75
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/80 via-black/20 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  flex items-end p-5
                "
              >
                <p className="text-white text-sm font-semibold leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
