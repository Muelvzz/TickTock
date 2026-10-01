import AvatarIcon from "../../assets/dashboard/avatar.svg?react"
import CalendarIcon from "../../assets/dashboard/calendar.svg?react"
import SearchIcon from "../../assets/dashboard/search.svg?react"
import TaskIcon from "../../assets/dashboard/task.svg?react"
import QuestionIcon from "../../assets/dashboard/question.svg?react"
import type { SetStateAction } from "react"

type SidebarProps = {
  activeSideTab: string
  setActiveSideTab: React.Dispatch<SetStateAction<string>>
  sideButtonStyles: string

}

export default function Sidebar({ activeSideTab, setActiveSideTab, sideButtonStyles }: SidebarProps) {
  return (
    <>
      <section className="hidden md:flex md:flex-col border-grey border-solid border-r-2">

        <div className="flex flex-col justify-between items-stretch min-h-screen p-3">
          <div className="flex flex-col gap-y-4">
            <button 
              onClick={() => setActiveSideTab("avatar")}
            >
              <AvatarIcon className={`
                ${activeSideTab === "avatar" ? "text-black" : "text-grey"}
                ${sideButtonStyles}
              `} />
            </button>
            <button 
              onClick={() => setActiveSideTab("task")}
            >
              <TaskIcon className={`
                ${activeSideTab === "task" ? "text-black" : "text-grey"}
                ${sideButtonStyles}
              `} />
            </button>
            <button 
              onClick={() => setActiveSideTab("calendar")}
            >
              <CalendarIcon className={`
                ${activeSideTab === "calendar" ? "text-black" : "text-grey"}
                ${sideButtonStyles}
              `} />
            </button>
            <button 
              onClick={() => setActiveSideTab("search")}
            >
              <SearchIcon className={`
                ${activeSideTab === "search" ? "text-black" : "text-grey"}
                ${sideButtonStyles}
              `} />
            </button>
          </div>
          <div>
            <button 
              onClick={() => setActiveSideTab("question")}
            >
              <QuestionIcon className={`
                ${activeSideTab === "question" ? "text-black" : "text-grey"}
                ${sideButtonStyles}
              `} />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}