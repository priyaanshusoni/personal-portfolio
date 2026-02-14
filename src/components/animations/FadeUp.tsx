import { motion } from "motion/react";
import React from "react";
interface FadeUpProps {
  children: React.ReactNode;
  as?: React.ElementType;
  props?: React.ComponentProps<React.ElementType>;
  delay?: number;
}
const FadeUp = ({ children, as = "div", props, delay = 0 }: FadeUpProps) => {
  const MotionComponent = motion(as);
  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default React.memo(FadeUp);
