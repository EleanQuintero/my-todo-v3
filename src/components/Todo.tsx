'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { DeleteTodoProps, Todo as TodoType, UpdateTodoProps } from '../types'
import { TodoContext } from '../contexts/todoContext'
import { useTodos } from '../hooks/useTodos'

interface Props {
  todoID: number
  title: string
  status: boolean
}
export const Todo: React.FC <Props> = ({ todoID, title, status }) => {
  const { todos, setTodos, isEditing, setIsEditing, sync } = useContext(TodoContext)
  const [editedTitle, setEditedTitle] = useState(title)
  const inputEditTitle = useRef<HTMLInputElement>(null)
  const { updateTodo, deleteTodo, getTodos } = useTodos()

  const handleRemove = ({ todoID }: DeleteTodoProps): void => {
    const newTodos = todos.filter(todo => todo.todoID !== todoID)
    try {
        void deleteTodo({ todoID })
      }
      catch (error) {  
        if (error instanceof Error) throw new Error(error.message)
      } 
    finally {
      setTodos(newTodos)
    }
  }

  const handleComplete = ({ todoID, status }: Pick<TodoType, 'todoID' | 'status'>): void => {
    const todoStatus = status
    const newTodos = todos.map((todo) => {
      if (todo.todoID === todoID) {
        if (sync) {
          void updateTodo({ todoID, todoStatus })
        }
        return {
          ...todo,
          status
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleUpdateTitle = ({ todoID, todoTitle }: UpdateTodoProps): void => {
    const newTodos = todos.map((todo) => {
      if (todo.todoID === todoID) {
        if (sync) {
          void updateTodo({ todoID, todoTitle })
        }
        return {
          ...todo,
          todoTitle
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    try {
      if (e.key === 'Enter') {
        setEditedTitle(editedTitle.trim())
        setIsEditing('')
      }

      if (editedTitle !== title) {
        handleUpdateTitle({ todoID, todoTitle: editedTitle })
      }

      if (editedTitle === '') {
        handleRemove({ todoID })
        setIsEditing('')
      }

      if (e.key === 'Escape') {
        setEditedTitle(title)
        setIsEditing('')
      }
    } finally {
      void getTodos()
    }
  }

  useEffect(() => {
    if (isEditing === todoID.toString()) {
      inputEditTitle.current?.focus()
    }
  }, [isEditing, todoID])

  return (
    <>
      <div className='flex items-center h-full w-full relative'> 
        <input 
          id={`toggle-${todoID}`}
          className='toggle'
          checked={status}
          type='checkbox'
          onChange={(event) => {
        handleComplete({ todoID, status: event.target.checked })
          }}
        />
        <label 
         htmlFor={`toggle-${todoID}`}
         className=' check cursor-pointer ml-2  absolute bottom-2 -right-8'></label>
         <label className='flex items-center justify-center w-full text-center mr-10'>{title}</label>
        <button
          className='destroy absolute'
          onClick={() => { handleRemove({ todoID }) }}
        />
      </div>

      <input
        className='edit'
        value={editedTitle}
        onChange={(e) => { setEditedTitle(e.target.value) }}
        onKeyDown={handleKeyDown}
        onBlur={() => { setIsEditing('') }}
        ref={inputEditTitle}
      />
    </>
  )
}
