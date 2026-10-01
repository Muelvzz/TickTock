import AuthNavigation from "../components/auth-nav/AuthNav"
import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { registerUserData } from "../services/userService"
import { Link } from "react-router-dom"

export default function Register() {
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const data = useAuth()

  const inputStyles = "px-3 py-2 lg:px-4 lg:py-3 rounded-lg border border-solid border-grey"

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!email || !password || !username) { alert("Invalid values found on username, email or password") }
    e.preventDefault()
    const payload = await registerUserData(username, email, password)
    if (payload?.user?.username) {
      await data?.login(payload.user.username)
    }
  }
  return (
    <>
      <AuthNavigation 
        text="Already have an account?"
        btnText="Sign In"
        redirect="/sign-in"
      />
      <main className="h-screen">
        <article className="flex justify-center items-center h-full py-10">
          <section className="w-9/10 md:w-7/10 lg:w-5/10 bg-washed-white p-5 md:p-10 lg:p-15 rounded-md">
            <div className="flex flex-col gap-y-30">
              <div className="flex flex-col gap-y-3">
                <form onSubmit={ handleRegister } action="" className="flex flex-col gap-y-10">
                  <div>
                    <h2 className="font-bold">Sign Up</h2>
                  </div>
                  <div className="flex flex-col gap-y-5">
                    <input type="text" placeholder="username" className={ inputStyles } value={ username } onChange={(e) => setUsername(e.target.value)}/>
                    <input type="email" placeholder="email" className={ inputStyles } value={ email } onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="password: 6-64 characters" className={ inputStyles } value={ password } onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit" className="bg-green rounded-md px-3 py-2 lg:px-4 lg:py-3 text-white font-bold">Sign Up</button>
                  </div>
                </form>
                <div className="text-center">
                  <small>
                    By signing up, you agree to our <u>Terms of Service</u> and <u>Privacy Policy</u>
                  </small>
                </div>
              </div>
              <div className="text-center">
                <p>Already have an account? <Link to="/sign-in"><u className="text-green">Sign In</u></Link></p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}