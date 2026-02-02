export interface PersonalData {
  nama_lengkap: string;
  nama_panggilan: string;
  role: string;
  lokasi: string;
  kontak: {
    email: string;
    github: string;
    linkedin: string;
  };
  tentang_saya: string;
  keahlian: string[];
  pendidikan: {
    institusi: string;
    jurusan: string;
    tahun: string;
  }[];
  pengalaman: {
    posisi: string;
    perusahaan: string;
    tahun: string;
    deskripsi: string;
  }[];
}

export interface ApiResponse {
  message: string;
  data: PersonalData;
}
