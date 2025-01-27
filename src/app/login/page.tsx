"use client";

import {  fetchProfile, fetchUsers } from "../lib/data";
import { useContext, useState } from "react";
import { userData } from "@/types";
import { userDataContext } from "@/contexts/userDataContext";
import { LogRegisterInput } from "@/components/ui/LogRegisterInput"

interface profileData{
  id: string
  username: string
  password: string
  avatar: string
}

export default function Login() {
  const [error, setError] = useState("");
  const { setUserData } = useContext(userDataContext)

  const handleLoginSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = Object.fromEntries(
        new window.FormData(event.currentTarget)
      ) as unknown as profileData;
      await fetchUsers(user);
      const profile = await fetchProfile();
      setUserData(profile as userData);
      console.log("sumbit")
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }; 
  return (
    <section className="grid m-auto p-0 h-screen">
        <h1 className="text-2xl font-extrabold justify-items-center m-auto">
          Inicia Sesion en tu cuenta de my to-Do-App 
        </h1>
        <LogRegisterInput handleLoginSumbit={handleLoginSumbit} handleRegisterSumbit={handleLoginSumbit} error={error}/>
    </section>
  )
}
