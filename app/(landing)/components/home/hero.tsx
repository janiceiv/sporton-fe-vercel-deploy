import Button from "../ui/button";
import { FiFastForward } from "react-icons/fi";
import Image from "next/image";

const HeroSection = () => {
  return(
    <section id="hero-section" className="relative container mx-auto min-h-screen flex items-center pt-50">      
      <div className="relative self-center"/>
        <Image
          src="/image/img-basketball.svg"
          width={300}
          height={300}
          alt="image sporton"
          className="grayscale absolute left-0 top-25"
        />
        <div className="relative ml-40 w-full">
          <div className="text-primary italic inline-flex items-center px-3 py-2 rounded-full bg-[#FF5F3F]/[0.11]">Friday Sale, 50%</div>
          <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-10 leading-loose">
            Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.
          </p>
          <div className="flex gap-5 mt-14">
            <Button>Explore More <FiFastForward/></Button>
            <Button variant="ghost">Watch Video <Image src='\image\icon-play-video.svg' alt="icon play video" width={29} height={29}/> </Button>
          </div>
        </div>
      <div>
         <Image
          src="/image/img-hero.png"
          width={600}
          height={600}
          alt="image sporton hero"
          className="absolute -right-5 top-1/2 -translate-y-1/2"
          />
      </div>
      <Image
        src="/image/img-ornament-hero.svg"
        width={350}
        height={350}
        alt="image sporton"
        className="absolute -right-50 top-1/2 -translate-y-1/2 "
      />
    </section>
    )
}
export default HeroSection;