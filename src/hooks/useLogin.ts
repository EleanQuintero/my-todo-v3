import { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import { fetchProfile } from '@/app/lib/data'
import { userDataContext } from '@/contexts/userDataContext'

interface useLoginTypes {
  logedUser: () => Promise<void>
}

export const useLogin = (): useLoginTypes => {
  const {  isloged, setLoginError } = useContext(TodoContext)
  const {  setUserData  } = useContext(userDataContext)
  const logedUser = async (): Promise<void> => {
    try {
      const user = await fetchProfile()
      console.log(" data: " , {user})
      if (user !== undefined) {
        isloged(true)
        setUserData(user)
        setLoginError(false)
        console.log("datos del user: " + user)
      } 
    } catch (error) {
      setLoginError(true)
      throw new Error(String(error))
    }
  }

  return { logedUser }
}