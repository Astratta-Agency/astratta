import Home10 from "@/components/homes/home-10";
import Hero2 from "@/components/homes/home-8/heros/Hero2";
import Header8 from "@/components/headers/Header8";
import Footer5 from "@/components/footers/Footer5";
import ParallaxContainer from "@/components/common/ParallaxContainer";

import { modernOnepage } from "@/data/menu";

export const metadata = {
  title:
    "Astratta Agency | Modern Designs, Sustainable Solutions",
  description:
    "Web Development | Graphic Design | Digital Marketing",
};

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          {/* Navigation Panel */}
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header8 links={modernOnepage} />
          </nav>
          {/* End Navigation Panel */}
          <main id="main">
            {/* Home Section */}
            <ParallaxContainer
                className="home-section bg-gradient-primary-1 bg-dark-alpha-30 light-content parallax-5 scrollSpysection"
                id="home"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-modern/astratta-bg.webp)",
                }}
              >
                <Hero2 />
              </ParallaxContainer>
            
            <Home10 onePage />
            {/* End Home Section */}
          </main>
          {/* Footer */}
          <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
            <Footer5 />
          </footer>
          {/* End Footer */}
        </div>
      </div>
    </>
  );
}
