import { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { useFetchTodos } from '../services/getTodos'
import { DeleteTodoProps, Newtodo, Todo, UpdateTodoProps } from '../types'
import { API_URL } from '../api_Endpoints/Endpoints'
import { userDataContext } from '@/contexts/userDataContext'

interface useTodosType {
  getTodos: () => Promise<void>
  postTodo: (data: Newtodo) => Promise<void>
  updateTodo: ({ todoID, todoStatus, todoTitle }: UpdateTodoProps) => Promise<void>
  deleteTodo: ({ todoID }: DeleteTodoProps) => Promise<void>
  deleteCompletedTodos: (userid: string) => Promise<void>

}

export const useTodos = (): useTodosType => {
  const { setTodos } = useContext(TodoContext)
  const { userData } = useContext(userDataContext)
  const getTodos = async (): Promise<void> => {
    try {
      const newTodos = await useFetchTodos(userData.id as string)
      console.log(newTodos)
      if (newTodos !== undefined) {
        setTodos(newTodos)
      } else {
        const initialValue: Todo[] = []
        setTodos(initialValue)
      }
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const postTodo = async (data: Newtodo): Promise<void> => {
    try {
      const response = await fetch(API_URL.POST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error('No se pudo enviar la tarea:' + response.statusText)
      }
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  }

  const updateTodo = async ({ todoID, todoTitle, todoStatus, userid }: UpdateTodoProps): Promise<void> => {
    try {
      const data: { todo_title?: string, todo_status?: boolean } = {}
      if (todoTitle !== undefined) {
        data.todo_title = todoTitle
      }
      if (todoStatus !== undefined) {
        data.todo_status = todoStatus
      }
      console.log(data)

      const response = await fetch(`${API_URL.PATCH}${todoID}/${userid}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error('No se pudo actualizar el todo:' + response.statusText)
      }
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  }

  const deleteTodo = async ({ todoID }: DeleteTodoProps): Promise<void> => {
    try {
      const response = await fetch(`${API_URL.DELETE}${todoID}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se pudo eliminar el todo:' + response.statusText)
      }
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  }

  const deleteCompletedTodos = async (userid: string): Promise<void> => {
    try {
      const response = await fetch(`${API_URL.DELETE_COMPLETED_ALL}${userid}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('No se han podido eliminar los todos:' + response.statusText)
      }
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  }

  return { getTodos, postTodo, updateTodo, deleteTodo, deleteCompletedTodos }
}
