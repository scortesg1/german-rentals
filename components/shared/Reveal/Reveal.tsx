"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { RevealProps } from "./Reveal.types";

export const fadeIn = (position: string, delay?: number) => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay ? delay : 0.5,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    hidden: {
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? 80 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: 0.2,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
};

export default function Reveal(props: RevealProps) {
  const { children, position, className, delay } = props;

  const ref = useRef(null);
  const isVisible = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isVisible]);

  return (
    <div ref={ref}>
      <motion.div className={className} variants={fadeIn(position, delay)} initial="hidden" animate={mainControls} exit="hidden" transition={{
        duration: 0.3,
        delay: 0.2
      }} >{children}</motion.div>
    </div>
  );
}
