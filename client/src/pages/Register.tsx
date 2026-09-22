import AuthNavigation from "../components/auth-nav/AuthNav"
import { Link } from "react-router-dom"

export default function Register() {
  const inputStyles = "px-3 py-2 lg:px-4 lg:py-3 rounded-lg border border-solid border-grey"
  return (
    <>
      <AuthNavigation 
        text="Already have an account?"
        btnText="Sign In"
        redirect="/sign-in"
      />
      <main className="h-full">
        <article className="flex justify-center items-center h-full py-10">
          <section className="w-9/10 md:w-7/10 lg:w-5/10 bg-washed-white p-5 md:p-10 lg:p-15 rounded-md">
            <div className="flex flex-col gap-y-30">
              <div className="flex flex-col gap-y-3">
                <form action="" className="flex flex-col gap-y-10">
                  <div>
                    <h2 className="font-bold">Sign Up</h2>
                  </div>
                  <div className="flex flex-col gap-y-5">
                    <input type="email" placeholder="email" className={ inputStyles }/>
                    <input type="password" placeholder="password: 6-64 characters" className={ inputStyles }/>
                    <button className="bg-green rounded-md px-3 py-2 lg:px-4 lg:py-3 text-white font-bold">Sign Up</button>
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