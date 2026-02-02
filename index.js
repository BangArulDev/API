const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Data diri lengkap (Placeholder - Silakan diedit sesuai kebutuhan)
const personalData = {
  nama_lengkap: "Amrul",
  nama_panggilan: "Bang Arul",
  role: "Fullstack Developer",
  lokasi: "Indonesia",
  kontak: {
    email: "contoh@email.com",
    github: "https://github.com/BangArulDev",
    linkedin: "https://linkedin.com/in/amrul",
  },
  tentang_saya:
    "Pengembang web yang berdedikasi dengan ketertarikan pada teknologi modern dan open source.",
  keahlian: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  pendidikan: [
    {
      institusi: "Nama Universitas/Sekolah",
      jurusan: "Teknik Informatika",
      tahun: "2020 - 2024",
    },
  ],
  pengalaman: [
    {
      posisi: "Web Developer",
      perusahaan: "Freelance",
      tahun: "2023 - Sekarang",
      deskripsi: "Membangun aplikasi web responsif dan dinamis.",
    },
  ],
};

app.get("/", (req, res) => {
  res.json({
    message: "Selamat datang di API Data Diri Bang Arul",
    data: personalData,
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
