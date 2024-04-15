import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';

const CountingAnimation = ({ start, end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Change this threshold as per your need
    );

    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    return () => {
      if (countingRef.current) {
        observer.unobserve(countingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const startAnimation = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(start + (end - start) * percentage));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(startAnimation);
      }
    };

    if (isVisible) {
      animationFrameId = requestAnimationFrame(startAnimation);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, start, end, duration]);

  return (
    <div ref={countingRef}>
      <Transition
        show={isVisible}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <span className="text-4xl font-bold ">{count}</span>
      </Transition>
    </div>
  );
};

export default CountingAnimation;
