"use client"

import { type FC, useContext, useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { AlertCircle, Calendar, CheckCircle2, Pencil, Trash2, X } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTodos } from "@/hooks/useTodos"
import { DeleteTodoProps, UpdateTodoProps } from "@/types"
import { TodoContext } from "@/contexts/todoContext"

export interface Todo {
    todoID: number
    title: string
    status: boolean
    createdTo?: string
    important: boolean
  }

interface TodoCardProps {
  todo: Todo
  userid: string
}

const TodoCard: FC<TodoCardProps> = ({ todo, userid }) => {
  const { todoID, title, status, important, createdTo } = todo
  const { todos, setTodos } = useContext(TodoContext)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title) 
  const { updateTodo, deleteTodo } = useTodos()



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

  const handleComplete = ({ todoID }: { todoID: number }): void => {
    const newTodos = todos.map((todo) => {
      if (todo.todoID === todoID) {
        const todoStatus = !todo.status
          void updateTodo({ todoID, todoStatus, userid, todoTitle: todo.title })
        return {
          ...todo,
          status: todoStatus
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleUpdateTitle = ({ todoID, todoTitle }: UpdateTodoProps): void => {
    const newTodos = todos.map((todo) => {
      if (todo.todoID === todoID) {
          void updateTodo({ todoID, todoTitle, userid, todoStatus: todo.status })
        return {
          ...todo,
          title: todoTitle
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleStatus = () => {
    handleComplete({ todoID })
  }

  const handleSave = () => {
    handleUpdateTitle({ todoID, todoTitle: editedTitle, userid, todoStatus: todo.status })
    setIsEditing(false)
  }


  const handleCancel = () => {
    setEditedTitle(title)
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  return (
    <Card className={`w-full max-w-md ${status ? "bg-green-50" : important ? "bg-amber-50" : ""}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        {isEditing ? (
          <div className="flex w-full items-center space-x-2">
            <Input value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} className="flex-grow" />
            <Button size="sm" onClick={handleSave}>
              Guardar
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancel}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            <h3 className={`text-lg font-semibold ${status ? "line-through text-gray-500" : ""}`}>{title}</h3>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="ghost" onClick={handleEdit}>
                <Pencil className="h-4 w-4" />
              </Button>
              <Button size="sm" variant={status ? "outline" : "default"} onClick={handleStatus}>
                <CheckCircle2 className={`h-4 w-4 ${status ? "text-green-500" : "text-gray-400"}`} />
              </Button>
              {important && !status ? <AlertCircle className="h-5 w-5 text-amber-500" /> : null}
            </div>
          </>
        )}
      </CardHeader>
      <CardContent>
        <p className={`text-sm ${status ? "line-through text-gray-500" : "text-gray-600"}`}>{}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center space-x-2">
          {createdTo && (
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="mr-1 h-4 w-4" />
              {format(createdTo, "d 'de' MMMM, yyyy", { locale: es })}
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={status ? "secondary" : important ? "destructive" : "default"}>
            {status ? "Completada" : important ? "Importante" : "Pendiente"}
          </Badge>
          <Button size="sm" variant="destructive" onClick={()=> handleRemove({todoID})}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TodoCard

