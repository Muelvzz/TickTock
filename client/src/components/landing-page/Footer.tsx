import redditImg from "../../assets/socials/reddit.png"
import discordImg from "../../assets/socials/discord.png"
import mediumImg from "../../assets/socials/medium.png"
import linkedinImg from "../../assets/socials/linkedin.png"
import githubImg from "../../assets/socials/github.png"

export default function Footer() {
  return (
    <>
      <footer className="px-3 sm:px-15 md:px-20 lg:px-40">
        <article className="flex flex-col md:flex-row justify-between">
          <section className="md:flex-1 flex justify-between mb-5">
            <div>
              <p><b>Product</b></p>
              <ul className="flex flex-col gap-y-3 mt-3">
                <li>Get Started</li>
                <li>View Repo</li>
              </ul>
            </div>
            <div>
              <p><b>Support</b></p>
              <ul className="flex flex-col gap-y-3 mt-3">
                <li>Help Center</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <p><b>About</b></p>
              <ul className="flex flex-col gap-y-3 mt-3">
                <li>About Me</li>
              </ul>
            </div>
          </section>
          <section className="hidden md:flex-1 md:flex flex-col items-end gap-y-3">
            <span>
              <button className="bg-green text-white px-8 py-2 font-bold rounded-md">Get Started</button>
            </span>
            <div>
              <ul className="flex gap-x-3">
                <li>
                  <img src={ redditImg } alt="" className="w-8"/>
                </li>
                <li>
                  <img src={ discordImg } alt="" className="w-8"/>
                </li>
                <li>
                  <img src={ githubImg } alt="" className="w-8"/>
                </li>
                <li>
                  <img src={ linkedinImg } alt="" className="w-8"/>
                </li>
                <li>
                  <img src={ mediumImg } alt="" className="w-8"/>
                </li>
              </ul>
            </div>
          </section>
        </article>
        <hr />
        <span>
          <p className="mt-5">@2026 TickTock Team.</p>
        </span>
      </footer>
    </>
  )
}