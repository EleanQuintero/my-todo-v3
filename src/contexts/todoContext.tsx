"use client"
import { createContext, useState } from 'react'
import { FilterValue, Todo, TodoContextType, userData } from '../types'
import { initialUserData, initialvalue, TODO_FILTERS } from '../const'

interface Props {
  children: React.ReactNode
}

export const TodoContext = createContext<TodoContextType>({
  sync: false,
  setSync: () => {},
  todos: [],
  setTodos: () => {},
  filterSelected: TODO_FILTERS.ALL,
  setFilterSelected: () => {},
  isEditing: '',
  setIsEditing: () => {},
  userData: initialUserData,
  setUserData: () => {},
  isloged: () => {},
  loged: false,
  darkMode: false,
  setDarkmode: () => {},
  loginError: false,
  setLoginError: () => {}
})

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [sync, setSync] = useState(false)
  const [todos, setTodos] = useState<Todo[]>(initialvalue)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  const [isEditing, setIsEditing] = useState('')
  const [userData, setUserData] = useState<userData>(initialUserData)
  const [loged, isloged] = useState(false)
  const [darkMode, setDarkmode] = useState(false)
  const [loginError, setLoginError] = useState(false)


  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      filterSelected,
      setFilterSelected,
      isEditing,
      setIsEditing,
      sync,
      setSync,
      userData,
      setUserData,
      isloged,
      loged,
      darkMode,
      setDarkmode,
      loginError,
      setLoginError
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
