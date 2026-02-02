import React from "react";
import { motion } from "framer-motion";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            <span className="border-b-4 border-primary pb-2">
              Technical Skills
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-6 py-3 bg-slate-800 rounded-lg text-slate-200 border border-slate-700 hover:border-primary/50 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
