import React from "react";
import type { PersonalData } from "../types";

interface ContactProps {
  data: PersonalData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <footer className="py-10 text-center text-slate-400 border-t border-slate-800">
      <p>
        © {new Date().getFullYear()} {data.nama_lengkap}. All rights reserved.
      </p>
      <p className="mt-2">Built with React, TypeScript & Tailwind CSS</p>
    </footer>
  );
};

export default Contact;
