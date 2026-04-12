import { useState } from "react";

export const useForm = () => {
  const [nomeScuola, setNomeScuola] = useState<string>("");
  const [grado, setGrado] = useState<number>(0);
  const [provincia, setProvincia] = useState<string>("");
  const [classe, setClasse] = useState<string>("");
  const [nomeDocente, setNomeDocente] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nomeProgetto, setNomeProgetto] = useState<string>("");
  const [descrizione, setDescrizione] = useState<string>("");

  const handleNomeScuola = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNomeScuola(e.target.value);
  };

  const handleGrado = (e: React.ChangeEvent<HTMLInputElement>) => {
    const grado = e.target.value === "" ? 0 : Number(e.target.value);
    setGrado(grado);
  };

  const handleProvincia = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProvincia(e.target.value);
  };

  const handleClasse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClasse(e.target.value);
  };

  const handleNomeDocente = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNomeDocente(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNomeProgetto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNomeProgetto(e.target.value);
  };

  const handleDescrizione = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescrizione(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registrazione = new URLSearchParams({
      nomeScuola,
      grado: String(grado),
      provincia,
      classe,
      nomeDocente,
      email,
      nomeProgetto,
      descrizione,
    });

    await fetch("http://localhost:8080/registrazione/registra", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: registrazione.toString(),
    });
  };

  return {
    nomeScuola,
    grado,
    provincia,
    classe,
    nomeDocente,
    email,
    nomeProgetto,
    descrizione,
    handleNomeScuola,
    handleGrado,
    handleProvincia,
    handleClasse,
    handleNomeDocente,
    handleEmail,
    handleNomeProgetto,
    handleDescrizione,
    handleSubmit,
  };
};
