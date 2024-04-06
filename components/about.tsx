"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      As a student at <span className="italic">Treca gimnazija</span>, I've been captivated by the IT industry since my early days. From tinkering with Python to mastering frontend technologies like React, my journey has been fueled by an unyielding curiosity and a passion for<span className="font-medium"> problem-solving</span>.
        In addition to my academic pursuits, I'm a <span className="font-medium">competitive programmer</span>, achieving <span className="font-medium">10th place</span> in the 2024 rankings. My primary expertise lies in <span className="font-medium">React</span>.
        Driven by a relentless desire to learn and grow, I constantly seek new challenges and technologies to master.
        Outside of coding, I find joy in hitting <span className="font-medium">the gym</span> and cherishing moments with <span className="font-medium">my family and friends</span>.
      </p>

     
    </motion.section>
  );
}
