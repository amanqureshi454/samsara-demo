import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Button = ({ title, redirect, styles }) => {
  const border = useMotionTemplate`1px solid #007bff`;
  const boxShadow = useMotionTemplate`0px 4px 24px #007bff `;
  return (
    <motion.button
      style={{
        border,
        // boxShadow,
      }}
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className={`group ${styles} relative flex w-fit items-center gap-1.5 rounded-full bg-[#007bff] px-4 py-2 text-white transition-colors hover:bg-[#007bff]`}
    >
      {title}
      <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
    </motion.button>
  );
};

export default Button;
