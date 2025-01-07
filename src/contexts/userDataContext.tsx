"use client"

import { initialUserData } from "@/const"
import { userData } from "@/types"
import { createContext, useState } from "react"

interface Props {
    children: React.ReactNode
  }

  interface userContextType {
    userData: userData
    setUserData: React.Dispatch<React.SetStateAction<userData>>
  }

  export const userDataContext = createContext<userContextType>({
    userData: initialUserData,
  setUserData: () => {},
  })
  
  export const UserDataProvider: React.FC<Props> = ({children}) => {
    const [userData, setUserData] = useState<userData>(initialUserData)

    return(
        <userDataContext.Provider value={{
            userData,
            setUserData
        }}
        >
            {children}
        </userDataContext.Provider>
    )
  }