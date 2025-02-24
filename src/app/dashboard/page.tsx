"use client"
import '@/index.css'
import { useContext, useEffect, useCallback, Suspense } from 'react'
import { useLogin } from '@/hooks/useLogin'
import { userDataContext } from '@/contexts/userDataContext'




export default function Dashboard(): React.JSX.Element {
  const { logedUser } = useLogin() // Dependencia para que se ejecute al montar el componente
  const { userData } = useContext(userDataContext)
  const memoizedLogedUser = useCallback(logedUser, [])

  useEffect(() => {
    void memoizedLogedUser()
  }, [memoizedLogedUser])


  
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <section className='lg:text-UI-bg-main-text m-auto p-0 h-full flex items-center justify-items-center '>
      <div>
      <h1 className='text-4xl font-extrabold ' >Bienvenido {userData.username}</h1>
      <h2 className='text-3xl font-extrabold' >Aqui tienes un resumen de tu actividad en My-ToDo</h2>
      </div>
    </section>
    </Suspense>

  )
}



