import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full relative">
      {/* Header Background with Pattern */}
      <div className="hero-pattern w-full h-[250px] sm:h-[300px] lg:h-[350px]" />

      {/* Profile Photo - Overlaps header bottom */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 sm:-bottom-[70px]">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-[140px] lg:h-[140px] rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
          <Image
            src="/profile.jpg"
            alt="Alonso Ortega"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 140px"
          />
        </div>
      </div>
    </div>
  );
}
