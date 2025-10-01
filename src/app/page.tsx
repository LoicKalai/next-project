"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
    const [livre, setLivre] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("api/livre", {
        method: "GET",
      });
      const data = await response.json({
        
      });

      console.log("data", data);

      setLivre(data[0]);
    };
    fetchUser();
  }, []);

  console.log(livre);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main>
        <p>test</p>
      </main>
    </div>
  );
}
