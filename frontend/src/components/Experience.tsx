import React from "react";
import { motion } from "framer-motion";
import type { PersonalData } from "../types";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceProps {
  data: PersonalData;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Experience Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>

          <div className="space-y-8">
            {data.pengalaman.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 border-l border-slate-700"
              >
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary"></span>
                <h3 className="text-xl font-semibold">{item.posisi}</h3>
                <div className="text-secondary font-medium mb-2">
                  {item.perusahaan}
                </div>
                <div className="text-slate-400 text-sm mb-3">{item.tahun}</div>
                <p className="text-slate-300">{item.deskripsi}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-secondary" size={28} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-8">
            {data.pendidikan.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 border-l border-slate-700"
              >
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <h3 className="text-xl font-semibold">{item.institusi}</h3>
                <div className="text-primary font-medium mb-2">
                  {item.jurusan}
                </div>
                <div className="text-slate-400 text-sm mb-3">{item.tahun}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
