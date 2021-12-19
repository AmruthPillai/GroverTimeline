import clsx from "clsx";

import events from "config/events";
import Event from "sections/Event";

import styles from "./Timeline.module.css";

const Timeline = () => {
  const gap = 600;

  return (
    <section>
      <div
        className={clsx(styles.timeline)}
        style={{ width: events.length * gap }}
      >
        {events.map((event, index) => (
          <Event
            event={event}
            key={event.title}
            offset={index * gap}
            position={index % 2 ? "bottom" : "top"}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
