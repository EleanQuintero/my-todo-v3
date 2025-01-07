"use client";

import { userData } from "@/types";
import { fethNewUser } from "../lib/data";
import { useState } from "react";
import Link from "next/link";
import { validatePassword, validateUser } from "./schemas/newUserDataScheme";

export default function Register() {
  const [error, setError] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { username, password } = Object.fromEntries(
        new window.FormData(event.currentTarget)
      ) as unknown as userData;
      const validUsername = validateUser(username);
      const validPassword = validatePassword(password);

      const { user, message } = await fethNewUser({
        username: validUsername,
        password: validPassword,
      });
      setUsername(user);
      setMessage(message);
      setIsModalVisible(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <main className="grid justify-items-center h-full bg-slate-700">
      <h1 className="text-2xl font-extrabold justify-items-center m-auto">
        Crea tu cuenta en My to-Do App
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
            placeholder="Introduce tu nombre de usuario"
          />
          <input
            name="password"
            type="password"
            placeholder="Crea una contraseña"
          />
          <button className="border-solid bg-black rounded-2xl hover:bg-cyan-900 text-white">
            Crear cuenta
          </button>
          <Link
            className="h-9 text-center bg-black rounded-2xl text-white p-2"
            href={"/login"}
          >
            ¿Ya tienes cuenta? Iniciar sesion
          </Link>
        </form>
          {error && (
              <p className="text-red-700 font-semibold">{error}</p>
          )}
      {isModalVisible && (
        <div className=" fixed inset-0 text-white  bg-opacity-50 flex justify-center items-center">
          <div className=" h-50 w-80 bg-slate-400 p-4 rounded">
            <h2 className="text-2xl font-bold">
              Enhorabuena! tu usuario: {username}, {message}
            </h2>
            <p className="text-xl font-bold ">Ya puedes iniciar sesion</p>
            <div className="grid grid-cols-1">
              <button
                onClick={() => setIsModalVisible(false)}
                className="mt-4 h-9 bg-black text-white p-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
