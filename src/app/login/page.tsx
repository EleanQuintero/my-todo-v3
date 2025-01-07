"use client";

import {  fetchProfile, fetchUsers } from "../lib/data";
import { useContext, useState } from "react";
import Link from "next/link";
import { userData } from "@/types";
import { userDataContext } from "@/contexts/userDataContext";

interface profileData{
  id: string
  username: string
  password: string
  avatar: string
}

export default function Login() {
  const [error, setError] = useState("");
  const { setUserData } = useContext(userDataContext)

  const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = Object.fromEntries(
        new window.FormData(event.currentTarget)
      ) as unknown as profileData;
      await fetchUsers(user);
      const profile = await fetchProfile()
      setUserData(profile as userData)
     
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  } 
  return (
      <main className="grid justify-items-center h-full bg-slate-700">
        <h1 className="text-2xl font-extrabold justify-items-center m-auto">
          Inicia Sesion en tu cuenta de my to-Do-App 
        </h1>
        <form
          className="grid grid-rows-4 gap-4 h-44 w-96 text-black font-semibold"
          onSubmit={handleSumbit}
          action=""
        >
          <input
            className=""
            name="username"
            type="text"
            placeholder="Nombre de usuario"
          />
          <input name="password" type="password" placeholder="Contraseña" />
          {error && <p className="text-red-700 font-semibold">{error}</p>}
          <button className="border-solid bg-black rounded-2xl hover:bg-cyan-900 text-white">
            <Link href={"/dashboard"}>Iniciar Sesión</Link>
          </button>
          <Link
            className=" grid justify-items-center h-7 font-semibold border-solid bg-black rounded-2xl hover:bg-cyan-900 text-white"
            href={"/register"}
          >
            Crea una cuenta
          </Link>
          <Link href={"/dashboard"}>ir al dashboard</Link>
          
        </form>
      </main>
  );
}
