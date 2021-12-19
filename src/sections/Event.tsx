import { useInView } from "react-hook-inview";
import { FC, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";

import type { EventType } from "types";
import gsap from "config/gsap";

import styles from "./Event.module.css";

const padding = 28;

interface EventProps {
  offset: number;
  event: EventType;
  position?: "top" | "bottom";
}

const Event: FC<EventProps> = ({
  offset,
  position = "top",
  event: { date, title, location, summary, image },
}): JSX.Element => {
  const [inViewRef, isInView] = useInView();

  const detailsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    if (isInView) {
      if (position === "top") {
        timeline
          .fromTo(
            detailsRef.current,
            { opacity: 0, marginTop: "32px" },
            { opacity: 1, marginTop: "0" }
          )
          .fromTo(
            imageRef.current,
            { opacity: 0, marginTop: "-32px" },
            { opacity: 1, marginTop: "0" }
          );
      } else {
        timeline
          .fromTo(
            detailsRef.current,
            { opacity: 0, marginTop: "-32px" },
            { opacity: 1, marginTop: "0" }
          )
          .fromTo(
            imageRef.current,
            { opacity: 0, marginTop: "32px" },
            { opacity: 1, marginTop: "0" }
          );
      }
    } else {
      if (position === "top") {
        timeline
          .fromTo(
            detailsRef.current,
            { opacity: 1, marginTop: "0" },
            { opacity: 0, marginTop: "32px" }
          )
          .fromTo(
            imageRef.current,
            { opacity: 1, marginTop: "0" },
            { opacity: 0, marginTop: "-32px" },
            "<"
          );
      } else {
        timeline
          .fromTo(
            detailsRef.current,
            { opacity: 1, marginTop: "0" },
            { opacity: 0, marginTop: "-32px" }
          )
          .fromTo(
            imageRef.current,
            { opacity: 1, marginTop: "0" },
            { opacity: 0, marginTop: "32px" },
            "<"
          );
      }
    }
  }, [isInView, detailsRef, position]);

  useEffect(() => {
    if (detailsRef.current) {
      const detailsHeight = detailsRef.current.offsetHeight + padding;

      if (position === "top") {
        detailsRef.current.style.top = "-" + detailsHeight + "px";
      }
    }
  }, [detailsRef, position]);

  useEffect(() => {
    if (imageRef.current) {
      const imageHeight = imageRef.current.offsetHeight + padding;

      if (position === "bottom") {
        imageRef.current.style.top = "-" + imageHeight + "px";
      }
    }
  }, [imageRef, position]);

  return (
    <>
      <div
        ref={inViewRef}
        style={{ left: offset }}
        className={clsx(styles.indicator)}
      />
      <div
        ref={detailsRef}
        style={{ left: offset }}
        className={clsx("event", styles.summary, {
          "top-8": position === "bottom",
        })}
      >
        <h6>{date}</h6>
        <h1>{title}</h1>
        <h5>
          <span className="material-icons">place</span>
          <span>{location}</span>
        </h5>
        <ReactMarkdown>{summary}</ReactMarkdown>
      </div>
      <a
        href={image}
        ref={imageRef}
        target="_blank"
        rel="noreferrer"
        style={{ left: offset }}
        className={clsx("image", styles.image, {
          "top-8": position === "top",
          "origin-top-left": position === "top",
          "origin-bottom-left": position === "bottom",
        })}
      >
        <img src={image} alt="Event Text" />
      </a>
    </>
  );
};

export default Event;
