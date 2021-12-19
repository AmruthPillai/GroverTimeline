import { useEffect } from "react";
import clsx from "clsx";

import gsap, { ScrollTrigger } from "config/gsap";
import Intro from "sections/Intro";
import Timeline from "sections/Timeline";
import Statistics from "sections/Statistics";
import Outro from "sections/Outro";

import styles from "./App.module.css";

const App = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray("section") as HTMLElement[];

    let maxWidth = 0;
    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };
    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to(sections, {
      ease: "none",
      x: () => `-${maxWidth - window.innerWidth}`,
      scrollTrigger: {
        trigger: ".main",
        pin: true,
        scrub: 1,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true,
      },
    });

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        toggleClass: { targets: section, className: "active" },
        start: () => {
          return (
            "top top-=" +
            (section.offsetLeft - window.innerWidth / 2) *
              (maxWidth / (maxWidth - window.innerWidth))
          );
        },
        end: () => {
          return (
            "+=" +
            section.offsetWidth * (maxWidth / (maxWidth - window.innerWidth))
          );
        },
      });
    });
  }, []);

  return (
    <main className={clsx("main", styles.container)}>
      <Intro />
      <Timeline />
      <Statistics />
      <Outro />
    </main>
  );
};

export default App;
