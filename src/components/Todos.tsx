import React, { useContext } from 'react'
import { Todo } from './Todo'
import { TodoContext } from '../contexts/todoContext'
import { TODO_FILTERS } from '../const'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const Todos: React.FC = () => {

  const [parent] = useAutoAnimate()
  const { todos, filterSelected, setIsEditing, isEditing } = useContext(TodoContext)
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.status
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.status
    return todo
  })

  return (
    <ul className=' todo-list w-full h-full grid grid-cols-3 grid-rows-2'  ref={parent}>
      {filteredTodos.map(todo => (
        <div 
        className={`
            ${todo.status ? 'bg-UI-ui-completed-green' : 'bg-UI-highligth-element '} 
            ${todo.important ? 'bg-UI-ui-important-red' : 'bg-UI-highligth-element '}
              h-52 w-72 m-auto 
              flex items-center justify-center 
              border-solid rounded-3xl`}
        key={todo.todoID} >
        <li
          onDoubleClick={() => { setIsEditing(todo.todoID.toString()) }}
          className={` w-full h-full  list-none text-center text-3xl justify-items-center
            ${todo.status ? 'completed' : ''} 
            ${isEditing === todo.todoID.toString()
               ? 'editing'
               : ''}
            `}
        >
          <Todo
            key={todo.todoID}
            todoID={todo.todoID}
            title={todo.title}
            status={todo.status} 
          />
        </li>
              
        </div>
      ))}

      </ul>
  )
}
