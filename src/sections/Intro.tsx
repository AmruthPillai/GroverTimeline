import clsx from "clsx";
import { useEffect } from "react";

import gsap from "config/gsap";

import styles from "./Intro.module.css";
import { useMedia } from "react-use";

const Intro = () => {
  const isMobile = useMedia("(max-width: 480px)");

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 0.75,
        ease: "power2.out",
      },
    });

    timeline
      .to("section.intro > .collaboration", { opacity: 1 })
      .to("section.intro > img:first-of-type", {
        x: isMobile ? 0 : -100,
        opacity: 1,
      })
      .to("section.intro > img:last-of-type", {
        x: isMobile ? 0 : 100,
        opacity: 1,
      })
      .to("section.intro > .next", { opacity: 1 })
      .to("section.intro > .next", {
        x: isMobile ? 0 : -20,
        y: isMobile ? -20 : 0,
        repeat: -1,
        yoyo: true,
        duration: 0.4,
      });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        start: "top top",
        trigger: "section.intro",
        toggleActions: "play pause resume reverse",
      },
    });

    scrollTimeline.to("section.intro", { opacity: 0 });
  }, [isMobile]);

  return (
    <section className={clsx("intro", styles.container)}>
      <img src="images/logos/grover.svg" alt="Grover Logo" className="h-20" />

      <div className={clsx("collaboration", styles.collaboration)}>X</div>

      <img
        src="images/logos/amruthpillai.svg"
        alt="Amruth Pillai Logo"
        className="h-20 md:h-24"
      />

      <div className={clsx("next", styles.next)}>
        <span className="text-sm">Let's Go!</span>
        <span className={clsx("material-icons", "text-2xl")}>
          {isMobile ? "expand_more" : "navigate_next"}
        </span>
      </div>
    </section>
  );
};

export default Intro;
