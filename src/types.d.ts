import { TODO_FILTERS } from './const'

export interface Todo {
  todoID: number
  userid?: string | null
  title: string
  status: boolean
  created?: string
  important: boolean
}

export interface Newtodo {
  userid: string | null
  title: string
  todo_status: boolean
  important: boolean
  todoID?: number
  createdTo?: string
}

export interface UpdateTodoProps {
  todoID: number
  todoTitle?: string
  todoStatus?: boolean
}

export interface DeleteTodoProps {
  todoID: number
}

export type TodoId = Pick<Todo, 'todoID'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'status'>
export type userID = Pick<Todo, 'userID'>
export type TodoCreated = Pick<Todo, 'created'>

export type uuid = `${string}-${string}-${string}-${string}-${string}`

export type FilterValue = typeof TODO_FILTERS [keyof typeof TODO_FILTERS]

export type ListOfTodos = Todo[]

export interface Props {
  todos: ListOfTodos
}

export interface TodoContextType {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  filterSelected: FilterValue
  setFilterSelected: React.Dispatch<React.SetStateAction< FilterValue>>
  isEditing: string
  setIsEditing: React.Dispatch<React.SetStateAction<string>>
  sync: boolean
  setSync: React.Dispatch<React.SetStateAction<boolean>>
  userData: userData
  setUserData: React.Dispatch<React.SetStateAction<userData>>
  loged: boolean
  isloged: React.Dispatch<React.SetStateAction<boolean>>
  darkMode: boolean
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>
  loginError: boolean
  setLoginError: React.Dispatch<React.SetStateAction<boolean>>
}

export interface userData {
  id: string | null
  username: string | null
  password: string | null
  avatar: string | null
}

