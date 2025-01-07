import { useContext  } from "react";
import { TodoContext } from "../contexts/todoContext";
import { initialUserData, initialvalue } from "../const";
import { useTodos } from "../hooks/useTodos";
import { userDataContext } from "@/contexts/userDataContext";
import Link from "next/link";
import { logOut } from "@/app/lib/data";


export const LogedSection: React.FC = ( ) => {
  const { isloged, loged, setTodos } = useContext(TodoContext);
  const { getTodos } = useTodos();
  const {userData, setUserData} = useContext(userDataContext) 

  const buttonStyle = "flex mt-2 bg-white p-2 border-solid border-4 border-UI-highligth-element rounded-3xl text-center text-black hover:bg-UI-white-hover hover:cursor-pointer";

  console.log(userData)

  const handleClick = (): void => {
    void logOut()
    setUserData(initialUserData);
    setTodos(initialvalue);
    isloged(!loged);
  };

  const handleTodo = (): void => {
     void getTodos();
  };

  return (
    <>
      <img
        src={`${userData.avatar}`}
        className="flex aspect-auto w-16 h-16 border-solid border-4  border-UI-highligth-element rounded-full"
      />
      <h1>Bienvenido {userData.username}</h1>
      <button
        onClick={handleTodo}
      >
        <Link className={`${buttonStyle}`} href="/dashboard/display"> Ver todos </Link>
      </button>
      <button
        onClick={handleClick}
        className={`${buttonStyle}`}	
      >
        Cerrar sesion
      </button>
    <Link className={`${buttonStyle}`} href="/dashboard/create">Crear </Link>
    <Link  className={`${buttonStyle}`} href="/dashboard"> ir al Dashboard </Link>
   
    </>
  );
};
