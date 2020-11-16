import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      className="flex max-w-md mx-auto bg-gray-100 rounded-lg shadow-sm"
    >
      <div className="pt-1 ml-6">
        <h1 className="text-2xl leading-tight text-blue-700">
          Tailwind and Create React App
        </h1>
        <p className="text-base leading-normal text-gray-700">
          Building apps together
        </p>
      </div>
    </motion.div>
  );
}
