import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { PersonalData } from "../types";

interface HeroProps {
  data: PersonalData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-secondary font-medium tracking-wider mb-4 uppercase">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {data.nama_lengkap}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
            {data.role}
          </p>

          <div className="flex items-center justify-center gap-4 text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{data.lokasi}</span>
            </div>
          </div>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            {data.tentang_saya}
          </p>

          <div className="flex justify-center gap-6">
            <a
              href={`mailto:${data.kontak.email}`}
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white"
            >
              <Mail size={24} />
            </a>
            <a
              href={data.kontak.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white"
            >
              <Github size={24} />
            </a>
            <a
              href={data.kontak.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-white"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
