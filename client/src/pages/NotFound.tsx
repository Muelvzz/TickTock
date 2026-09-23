import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <main className="h-screen flex justify-center items-center p-3">
        <article className="bg-washed-white w-full px-10 py-20 md:w-3/5 lg:w-2/5 rounded-lg">
          <section className="w-full flex flex-col gap-y-10">
            <span className="text-center">
              <div className="font-bold text-9xl">404</div>
              <h1 className="font-bold mb-5">Page Not Found</h1>
              <p>The requested URL was not found on this server.</p>
            </span>
            <span className="flex justify-center">
              <button 
                onClick={() => navigate(-1)}
                className="text-white bg-green px-12 py-4 rounded-sm font-bold"
              >
                Go Back
              </button>
            </span>
          </section>
        </article>
      </main>
    </>
  )
}