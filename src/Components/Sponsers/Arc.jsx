import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger from gsap
import "./Sponsers.css";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const WorkshopCircleAnimation = () => {
  const circleRef = useRef(null);
  const circle1Ref = useRef(null);
  const circleOuterRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const circleWidth = circle.offsetWidth;
    const circle1 = circle1Ref.current;
    const circle1Width = circle1.offsetWidth;
    const circleOuter = circleOuterRef.current;
    const circleOuterWidth = circleOuter.offsetWidth;

    gsap.fromTo(
      circle,
      { left: `calc(50% - ${circleWidth}px / 2)` },
      {
        left: -circleWidth / 2,
        duration: 0.5,
        scrollTrigger: {
          trigger: circle,
          toggleActions: 'restart restart restart restart',
        },
      }
    );

    gsap.fromTo(
      circle1,
      { left: `calc(50% - ${circle1Width}px / 2)` },
      {
        duration: 0.5,
        left: -circle1Width / 2,
        scrollTrigger: {
          trigger: circle1,
          toggleActions: 'restart restart restart restart',
        },
      }
    );

    gsap.fromTo(
      circleOuter,
      { left: `calc(50% - ${circleOuterWidth}px / 2)` },
      {
        duration: 0.5,
        left: -circleOuterWidth / 2,
        scrollTrigger: {
          trigger: circleOuter,
          toggleActions: 'restart restart restart restart',
        },
      }
    );
  }, []);

  return (
    <>
      <div className="main-page-workshop-home-circle" ref={circleRef}></div>
      <div className="main-page-workshop-home-arc" ref={circle1Ref}></div>
      <div className="main-page-workshop-home-outer-circle2" ref={circleOuterRef}></div>
    </>
  );
};

export default WorkshopCircleAnimation;
