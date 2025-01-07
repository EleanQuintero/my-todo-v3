import { API_URL } from "@/api_Endpoints/Endpoints"
import { userData } from "@/types"

interface registerResponse {
    user: string, 
    message: string
}

export async function fetchUsers({ username, password }: userData): Promise<userData> {
    try {
        if (!API_URL.LOGIN) {
            throw new Error('URL de login no definida')
        }
        
        const response = await fetch(API_URL.LOGIN, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) {
            throw new Error('credenciales invalidas')
        } else {
            const json = await response.json();
            const user: userData = json
            return user;
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Error al realizar la solicitud, intente de nuevo');
    }
}

export async function fethNewUser({ username, password }: userData): Promise<registerResponse> {
    try {
        if (!API_URL.REGISTER) {
            throw new Error('URL de Registro no definida')
        }
        
        const response = await fetch(API_URL.REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) {
            const errorText = await response.text()
            throw new Error(errorText);
        } else {
            const json = await response.json()
            const registerResponse = json
            console.log(registerResponse)
            return registerResponse
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error (error.message);
        }
        throw new Error('Error al realizar la solicitud, intente de nuevo');
    }
}

export async function fetchProfile() {
 try {
    const response = await fetch('/api/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }) 

    if(response.ok) {
        const json = await response.json()
        const userProfile: userData = json
        return userProfile
    }
 } catch (error ) {
    console.error(error)
 }
 }

 
 export async function logOut(){
    try {
      const response = await fetch('/api/logout',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'}
      })

      if(response.ok) {
          const logedoutMessage = await response.json()
          console.log(logedoutMessage)
          window.location.href = '/login'
      }
    } catch (error) {
      console.error(error)
  }
}
 
    

