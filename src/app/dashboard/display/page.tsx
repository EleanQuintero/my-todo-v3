"use client";
import { Todos } from "@/components/Todos";
import { userDataContext } from "@/contexts/userDataContext";
import { useContext } from "react";


export default function Display() {

  const { userData } = useContext(userDataContext)

  return (
    <section className="h-screen w-full grid grid-rows-display m-auto items-center justify-items-center">
       <h1 className="lg:text-4xl w-full text-UI-bg-main-text font-extrabold text-4xl text-center">Hola {userData.username}!, estas son tus tareas: </h1>
      <Todos />
    </section>
  )
}
