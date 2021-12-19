import clsx from "clsx";
import { FC, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-hook-inview";

import statistics from "config/statistics";
import { StatisticType } from "types";
import gsap from "config/gsap";

import styles from "./Statistics.module.css";

const Statistic = ({ item, index }: { item: StatisticType; index: number }) => {
  const counterAnim = useSpring({
    value: item.number,
    from: { value: 0 },
    config: { duration: 2000 },
    delay: index * 1000,
  });

  return (
    <div className={clsx("statistic", styles.statistic)}>
      <h2>
        <animated.span>
          {counterAnim.value.to((value) => Math.floor(value))}
        </animated.span>
        {item.more ? <span>+</span> : <></>}
      </h2>
      <h4>{item.label}</h4>
    </div>
  );
};

const Statistics: FC = (): JSX.Element => {
  const [inViewRef, isInView] = useInView();

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { stagger: 1 } });

    if (isInView) {
      timeline.to(".statistic", { opacity: 1 });
    }
  }, [isInView]);

  return (
    <section>
      <div ref={inViewRef} className={styles.container}>
        {isInView
          ? statistics.map((item, index) => (
              <Statistic key={item.label} item={item} index={index} />
            ))
          : null}
      </div>
    </section>
  );
};

export default Statistics;
