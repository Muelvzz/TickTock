import { useState } from "react"
import "../../css/hamburger.css"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
            <span className="w-full flex justify-end items-center">
              <div className="hidden md:flex">
                <ul className="flex items-center gap-x-5 font-bold">
                  <li>Features</li>
                  <li>Resources</li>
                  <li>
                    <button className="bg-green text-white px-4 py-1 rounded-sm">Get Started</button>
                  </li>
                </ul>
              </div>
              <div className="md:hidden">
                <button 
                  className={`hamburger ${isOpen ? 'open' : ''} w-6 h-4`} 
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Navigation"
                  aria-expanded={isOpen}
                >
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </button>
              </div>
            </span>
          </article>
          {isOpen && (
            <div className="absolute top-8 left-0 w-full bg-white flex flex-col p-4 space-y-4 z-999 md:hidden">
              <a href="">Features</a>
              <a href="">Resources</a>
              <a href="">Get Started</a>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}