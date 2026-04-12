import { useEffect, useState } from "react";

export const useApi = (url: string) => {
  const [data, setData] = useState<Proposta[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Errore: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Errore nel fetch:", err);
      }
    };
    fetchData();
  }, [url]);
  return data;
};
