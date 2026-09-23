export default function ChangePassword() {
  const inputStyles = "px-3 py-2 lg:px-4 lg:py-3 rounded-lg border border-solid border-grey"
  return (
    <>
      <main className="h-full">
        <article className="flex justify-center h-screen items-center py-10">
          <section className="w-9/10 md:w-7/10 lg:w-2/5 bg-washed-white p-5 md:p-10 lg:p-15 rounded-md">
            <div className="flex flex-col gap-y-30">
              <div className="flex flex-col gap-y-3">
                <form action="" className="flex flex-col gap-y-10">
                  <div>
                    <h2 className="font-bold">Change Password</h2>
                    <p>Enter a new password below to change your password.</p>
                  </div>
                  <div className="flex flex-col gap-y-5">
                    <input type="email" placeholder="New Password" className={ inputStyles }/>
                    <input type="email" placeholder="Re-enter new password" className={ inputStyles }/>
                    <button className="bg-green rounded-md px-3 py-2 lg:px-4 lg:py-3 text-white font-bold">Change Password</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}