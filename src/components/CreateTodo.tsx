'use client'
import React, { useContext, useState } from 'react'
import { Newtodo } from '../types'
import { useTodos } from '../hooks/useTodos'
import { userDataContext } from '@/contexts/userDataContext'

export const CreateTodo: React.FC = () => {
  const { userData } = useContext(userDataContext)
  const [inputValue, setInputValue] = useState('')
  const { postTodo } = useTodos()
  const [newError, setNewError] = useState<string | null>(null)
  const [important, setImportant] = useState<boolean>(false)
  const [checkDate, setCheckDate] = useState<boolean>(false)
  const [todoDate, setTodoDate] = useState<string>('')

  const handleAddTodo = async ( title: string ,  isImportant: boolean, createdTo: string): Promise<void> => {
      try {
        const newTodo: Newtodo = {
          userID: userData.id,
          title,
          status: false,
          important: isImportant,
          createdTo: createdTo
        }
        /// await postTodo(newTodo)
        console.log(newTodo)
      } catch (error) {
          if (error instanceof Error) throw new Error(error.message)
          setNewError(error as string)
      }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (inputValue.trim() !== '') {
      const title: string = inputValue.trim()
      const isImportant: boolean = important
      const createdTo: string = todoDate

      await handleAddTodo( title, isImportant, createdTo )
      setInputValue('')
      setImportant(false)
      setTodoDate('')
      setCheckDate(false)
    }
  }

  return (
    <form onSubmit={(event) => { void handleSubmit(event) }}>
      <input
        className='new-todo'
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        placeholder='¿Cuál será tu próxima tarea?'
        autoFocus
          />
      {newError && <p className='error'>{newError}</p>}
      <div className='inline-flex justify-center items-center'>
      <label htmlFor="important">Marcar como importante: </label>
      <input
        type='checkbox'
        name='important'
        checked={important}
        onChange={() => setImportant(!important)}
        /> 
      <label htmlFor="important">Agendar fecha del ToDo </label>
       <input
        type='checkbox'
        name='setDate'
        checked={checkDate}
        onChange={() => setCheckDate(!checkDate)}
        /> 

        <input 
        className={checkDate ? 'block' : 'hidden'}	
          type="date"
          name='date'
          value={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
           />
      </div>

    </form>
  )
}
