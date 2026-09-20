export function Hero() {
  return (
    <>
      <article className="flex justify-center items-center h-screen px-3 sm:px-15 md:px-20 lg:px-40">
        <div className="text-center w-full md:w-4/5 lg:w-2/5">
          <h1 className="font-bold font-nunito">Master Your Day, Free Your Mind</h1>
          <p>Transform your endless to-do list into effortless momentum. Plan tasks, set priorities, and achieve clarity without the clutter.</p>
          <span className="flex gap-x-5 justify-center mt-5">
            <button className="font-bold bg-green text-white px-5 py-2 rounded-full">Get Started</button>
            <button className="font-bold bg-white border-green border-solid border-2 text-green px-5 py-2 rounded-full">View Repo</button>
          </span>
        </div>
      </article>
    </>
  )
}