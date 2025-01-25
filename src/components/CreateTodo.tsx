"use client";
import React, { useContext, useState } from "react";
import { Newtodo } from "../types";
import { useTodos } from "../hooks/useTodos";
import { userDataContext } from "@/contexts/userDataContext";
import { DateInput } from "./create/DateInput";
import { Important } from "./create/Important";

export const CreateTodo: React.FC = () => {
  const { userData } = useContext(userDataContext);
  const [inputValue, setInputValue] = useState("");
  const { postTodo } = useTodos();
  const [newError, setNewError] = useState<string | null>(null);
  const [checkDate, setCheckDate] = useState<boolean>(false);
  const [important, setImportant] = useState<boolean>(false);

  const [todoDate, setTodoDate] = useState<Date>(new Date()) 

  const initialDate = new Date();

  const handleAddTodo = async (
    title: string,
    isImportant: boolean,
    createdTo: string
  ): Promise<void> => {
    try {
      const newTodo: Newtodo = {
        userid: userData.id,
        title,
        todo_status: false,
        important: isImportant,
        createdTo: createdTo,
      };
      await postTodo(newTodo)
      console.log(newTodo);
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
      setNewError(error as string);
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      const title: string = inputValue.trim();
      const isImportant: boolean = important;
      const createdTo: string = todoDate?.toISOString().replace('T', ' ').replace(/\..+/, '')
      console.log(createdTo)

      await handleAddTodo(title, isImportant, createdTo);
      setInputValue("");
      setImportant(false);
      setTodoDate(initialDate);
      setCheckDate(false);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        void handleSubmit(event);
      }}
      className="flex flex-col items-center w-full"
    >
      <div>
        <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="¿Cuál será tu próxima tarea?"
        autoFocus
      />
      {newError && <p className="error">{newError}</p>}
      <div className="inline-flex justify-center items-center">
        <Important important={important} setImportant={setImportant} />
        <DateInput
          checkDate={checkDate}
          setCheckDate={setCheckDate}
          todoDate={todoDate}
          setTodoDate={setTodoDate}
        />
      </div>
      </div>
      
    </form>
  );
};
