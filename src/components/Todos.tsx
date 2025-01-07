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
    <section className=' w-full h-full grid grid-cols-3 grid-rows-2 gap-4 '>
      {filteredTodos.map(todo => (
    <ul className={'w-full h-full flex items-center justify-center '} key={todo.todoID} ref={parent}>
        <div  className='bg-green-700 h-52 w-72 flex items-center justify-center border-solid rounded-3xl ' >
        <li
          onDoubleClick={() => { setIsEditing(todo.todoID.toString()) }}
          className={`list-none text-center text-3xl justify-items-center m-auto
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
    </ul>
      ))}

    </section>
  )
}
