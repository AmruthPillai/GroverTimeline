import { FC } from "react";

import styles from "./Outro.module.css";

const Outro: FC = (): JSX.Element => {
  return (
    <section>
      <div className={styles.container}>
        <p>
          Thank you to everyone I've worked with, I've spoken to, and to those
          who indirectly made these last few months the best ones yet.
        </p>

        <p>
          If you'd like to keep in touch, head on over to{" "}
          <a href="https://www.amruthpillai.com/">my website</a> to find the
          link to my socials or just shoot me{" "}
          <a href="mailto:im.amruth@gmail.com">an email</a> to catch up on old
          times.
        </p>

        <p>
          If you are interested in the code behind this fun timeline (or even
          use it for your own idea), you can check out the{" "}
          <a href="https://github.com/AmruthPillai/GroverTimeline">
            source code
          </a>{" "}
          here.
        </p>
      </div>
    </section>
  );
};

export default Outro;
