import { motion } from "motion/react";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Circle */}
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Geometric Trinity Shapes */}
        {/* Triangle */}
        <path
          d="M50 25L72 65H28L50 25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        
        {/* Square (rotated) */}
        <rect
          x="35"
          y="35"
          width="30"
          height="30"
          transform="rotate(45 50 50)"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        
        {/* Inner Circle */}
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}
