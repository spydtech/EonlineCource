// import React from 'react'

// const Marquee = () => {
//   return (
//     <div>Marquee</div>
//   )
// }

// export default Marquee

import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section>
     <ParallaxText baseVelocity={-1}>
 <div className="font-extrabold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-transparent bg-clip-text pt-4">
 Embark on your career journey with CodeWithGenius
 </div>
</ParallaxText>
<ParallaxText baseVelocity={1} >
  <div className="font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">Our mission is to help you reach your goals</div>
</ParallaxText>
    </section>
  );
}
