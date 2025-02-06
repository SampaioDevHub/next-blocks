import { Feature74 } from "@/components/features/feature";
import { Navbar5 } from "@/components/navbar.tsx/navbarItem";
import { ContainerScroll } from "@/components/container-scroll/container-scroll-animation";
import Image from "next/image";
import Back from "@/public/3d-graph-computer-illustration.jpg"
import { PricingSectionDemo } from "@/components/pricing-section";
import { HeroVideoDialog} from "@/components/HeroVideoDialog/hero-video-dialog";

export default function Page() {
  return (
    <>
      <Navbar5 />
      <HeroVideoDialog videoSrc="/path/to/video.mp4" thumbnailSrc={Back.src} />
      <div className="bg-orange-200 rounded-md mt-5 ml-5 mr-5 shadow-md">
        <section className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white mb-7 mt-[-120px]">
                  Transforme seu futuro com <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Investimentos Imobiliários
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={Back}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </section>
      </div>
      <Feature74 />
      <PricingSectionDemo />
    </>
  )
}