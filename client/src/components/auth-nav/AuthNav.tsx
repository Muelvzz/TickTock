import { Link } from "react-router-dom"

export default function AuthNavigation({text, btnText, redirect}: {text: string, btnText: string, redirect: string}) {
  return (
    <>
      <header>
        <nav className="flex px-3 sm:px-15 md:px-20 lg:px-40">
          <article className="flex justify-between w-full">
            <span className="w-full">
              <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="w-8 md:w-10 lg:w-12"/>
                <h3 className="font-agu text-green">TickTock</h3>
              </div>
            </span>
            <span className="hidden w-full md:flex justify-end items-center gap-x-4">
              <small>{ text }</small>
              <button className="bg-green px-4 py-1 rounded-sm">
                <Link to={ redirect }>
                  <small className="text-white font-bold">{ btnText }</small>
                </Link>
              </button>
            </span>
          </article>
        </nav>
      </header>
    </>
  )
}