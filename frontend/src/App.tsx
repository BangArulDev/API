import { useEffect, useState } from "react";
import { fetchPersonalData } from "./api";
import type { PersonalData } from "./types";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [data, setData] = useState<PersonalData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchPersonalData();
      setData(result);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center text-red-500">
        Error loading data. Please ensure the API is running at
        http://localhost:3000
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary/30">
      <Hero data={data} />
      <Skills skills={data.keahlian} />
      <Experience data={data} />
      <Contact data={data} />
    </div>
  );
}

export default App;
