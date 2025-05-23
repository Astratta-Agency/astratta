import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Services from "@/components/homes/home-3/Services";

const onePage = false;
const dark = true;
import { brutalistMultipage, brutalistMultipageDark } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export const metadata = {
  title:
    "Brutalist Services Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function BrutalistServicesPageDark() {
  return (
    <>
      <div className="theme-brutalist">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header3 links={brutalistMultipageDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="page-section parallax-5 light-content"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-brutalist/section-bg-1.jpg)",
                }}
                id="home"
              >
                <div className="container position-relative pt-20 pt-sm-40">
                  <h1 className="hs-title-2 font-alt uppercase mb-0">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      <AnimatedText text="OUR SERVICES" />
                    </span>
                    <span
                      className="section-title-image wow fadeScaleIn"
                      data-wow-delay="0.3s"
                    >
                      <Image
                        src="/assets/images/demo-brutalist/shape-2.svg"
                        alt=""
                        width={35}
                        height={35}
                      />
                    </span>
                  </h1>
                </div>
              </ParallaxContainer>
              <section
                className={`page-section  scrollSpysection ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="services"
              >
                <div className="container position-relative pt-40 pt-md-30 pt-sm-50">
                  <div
                    className="row mb-80 mb-md-50 wow fadeInUp"
                    data-wow-offset="0"
                  >
                    <div className="col-lg-5 mb-md-40">
                      <p className="section-descr-large mb-0">
                        We use the{" "}
                        <span className="mark-decoration-2">
                          power of design
                        </span>{" "}
                        to solve complex problems and cultivate business
                        solutions.
                      </p>
                    </div>

                    <div className="col-lg-7">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc semper aliquam est, a egestas ex vestibulum ac.
                        Curabitur cursus sem vitae arcu placerat cursus. Aenean
                        condimentum, justo eu cursus commodo, dolor mauris porta
                        nisi, vitae placerat diam dolor vel urna. In iaculis
                        placerat est pharetra dignissim.
                      </p>
                    </div>
                  </div>
                  <Services />
                </div>
              </section>
            </main>
            <footer className="page-section footer-1 bg-dark-2 light-content">
              <Footer3 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
