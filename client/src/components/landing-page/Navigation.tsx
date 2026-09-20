export default function Navigation() {
  return (
    <>
      <header>
        <nav className="flex px-40">
          <article className="flex justify-between w-full">
            <span className="w-full">
              <div className="flex">
                <img src="/logo.png" alt="Logo" className="w-12"/>
                <h2 className="font-agu text-green">TickTock</h2>
              </div>
            </span>
            <span className="w-full flex justify-end items-center">
              <div>
                <ul className="flex items-center gap-x-5 font-bold">
                  <li>Features</li>
                  <li>Resources</li>
                  <li>
                    <button className="bg-green text-white px-4 py-1 rounded-sm">Get Started</button>
                  </li>
                </ul>
              </div>
            </span>
          </article>
        </nav>
      </header>
    </>
  )
}