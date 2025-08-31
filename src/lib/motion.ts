import { Variants } from "framer-motion";

// Respect reduced motion preference by providing minimal transforms.
export const fadeUp = (distance = 32, duration = 0.6): Variants => ({
  hidden: (i: number = 0) => ({
    opacity: 0,
    y: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : distance,
  }),
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay: i * 0.12,
      ease: [0.16, 0.8, 0.24, 1]
    }
  })
});

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16,0.8,0.24,1] }
  }
};

export const viewportOnce = { once: true, margin: "-60px" };
