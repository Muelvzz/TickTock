import { useEffect, type SetStateAction } from "react"

export const useSessionId = (setUser: React.Dispatch<SetStateAction<string | null>>, setIsLoading: React.Dispatch<SetStateAction<boolean>>) => {

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("http://localhost:3000/session", {
          credentials: "include"
        })

        if (!response.ok) {
          setUser(null)
          return
        }

        const result: { user: { username: string } } = await response.json()
        setUser(result.user.username)
      } catch (error: unknown) {
        setUser(null)
        console.error(`[CLIENT] Unable to restore session: ${ error }`)
      } finally {
        setIsLoading(false)
      }
    }

    checkSession()
  }, [setIsLoading, setUser])
}