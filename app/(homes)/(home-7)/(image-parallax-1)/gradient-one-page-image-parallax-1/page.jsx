import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Home7 from "@/components/homes/home-7";
import Hero1 from "@/components/homes/home-7/heros/Hero1";
import Hero3 from "@/components/homes/home-7/heros/Hero3";
import Image from "next/image";
import dynamic from "next/dynamic";
import { gradientOnePage } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export const metadata = {
  title:
    "Home 7 Image Parallax1 Onepage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home7ImageParallax1Onepage() {
  return (
    <>
      <div className="theme-gradient">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              <Header7 links={gradientOnePage} />
            </nav>{" "}
          </div>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5 scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-gradient/section-bg-4.jpg)",
              }}
              id="home"
            >
              <Hero3 />
            </ParallaxContainer>

            <Home7 onePage />
          </main>
          <footer className="page-section footer bg-dark-1 light-content overflow-hidden pb-30">
            <div className="bg-shape-4">
              <Image
                width="1443"
                height="644"
                src="/assets/images/demo-gradient/bg-shape-1.svg"
                alt=""
              />
            </div>
            <Footer7 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
