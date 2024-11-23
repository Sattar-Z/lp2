import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero/bg1.jpg')", // You'll need to add your image to the public/images folder
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-black/50"></div>

        {/* Content */}
        <div className="container relative z-10 py-16 md:py-20">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 mt-10 leading-tight text-white">
                  <span
                    className="block text-4xl sm:text-5xl md:text-6xl"
                    style={{
                      fontFamily: "'Mogra', cursive",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    STORM ELITE FC
                  </span>
                  <span
                    className="mt-4 block text-2xl sm:text-3xl md:text-4xl"
                    style={{
                      fontFamily: "'Mogra', cursive",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    YOUTH ACADEMY
                  </span>
                  <span className="mt-4 block text-lg font-medium text-white">
                    FA AFFILIATED
                  </span>
                </h1>
                <p className="mb-8 text-base !leading-relaxed text-gray-100 sm:text-lg md:text-xl">
                  Creating a nurturing environment for young athletes in
                  Streatham, Norbury and Peckham. We focus on developing both
                  football skills and character, ensuring every player reaches
                  their full potential.
                </p>
                <div className="mb-8 text-base !leading-relaxed text-gray-100 sm:text-lg">
                  <strong className="text-primary">Now Recruiting:</strong>
                  <div className="mt-2 font-medium text-white">
                  U7s • U8s • U9s • U10s • U12s
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <Link
                    href="https://app.teamfeepay.com/register/club/2786"
                    target="_blank"
                    className="w-70 rounded-lg bg-primary px-12 py-6 text-center text-lg font-extrabold text-white shadow-lg duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Join Our Academy
                  </Link>
                  <Link
                    href="/about"
                    className="inline-block w-60 rounded-lg bg-white/20 px-12 py-6 text-center text-lg font-extrabold text-white shadow-lg backdrop-blur-lg duration-300 ease-in-out hover:bg-white/30"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
