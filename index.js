
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTrigger);

  gsap.to("#bd1", {
    scrollTrigger: {
      scrub: true
    },
    scale: 1.5
  });
  gsap.to("#bd2", {
    scrollTrigger: {
      scrub: true
    },
    scale: 1.0
  });
  gsap.to("#bd3", {
    scrollTrigger: {
      scrub: true
    },
    x:-500,
  });
  gsap.to("#bd4", {
    scrollTrigger: {
      scrub: true
    },
    scale: 1.5
  });
  gsap.to("#text", {
    scrollTrigger: {
      scrub: true
    },
    y:200,
  });
