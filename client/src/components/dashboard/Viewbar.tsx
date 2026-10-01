import AllIcon from "../../assets/dashboard/all.svg?react"
import TodayIcon from "../../assets/dashboard/today.svg?react"
import NextWeekIcon from "../../assets/dashboard/next-week.svg?react"
import SummaryIcon from "../../assets/dashboard/summary.svg?react"
import CheckIcon from "../../assets/dashboard/check.svg?react"
import WrongIcon from "../../assets/dashboard/wrong.svg?react"
import TrashIcon from "../../assets/dashboard/trash.svg?react"
import type { SetStateAction } from "react"

type ViewbarProps = {
  activeView: string
  setActiveView: React.Dispatch<SetStateAction<string>>
  activeStatus: string
  setActiveStatus: React.Dispatch<SetStateAction<string>>
  setBoardTitle: React.Dispatch<SetStateAction<string>>
}

export default function Viewbar({ activeView, setActiveView, activeStatus, setActiveStatus, setBoardTitle }: ViewbarProps) {
  return (
    <>
      <section className="flex flex-col w-1/2 h-full bg-washed-white rounded-lg p-2 m-0">
        <div className="border-b border-grey border-solid">
          <div className="flex gap-y-2 w-full flex-col mb-2">
            <div className={`${ activeView === "all" && "bg-light-grey" } flex justify-between py-1 px-2 rounded-lg items-center`}>
              <div className="flex gap-x-2 items-center">
                <button className="cursor-pointer" onClick={() => {setActiveView("all"); setActiveStatus(""); setBoardTitle("All")}}>
                  <AllIcon className="text-grey"/>
                </button>
                <p className="text-grey">All</p>
              </div>
              <small className="text-grey">19</small>
            </div>
            <div className={`${ activeView === "today" && "bg-light-grey" } flex justify-between py-1 px-2 rounded-lg items-center`}>
              <div className="flex gap-x-2 items-center">
                <button className="cursor-pointer" onClick={() => {setActiveView("today"); setBoardTitle("Today")}}>
                  <TodayIcon className="text-grey"/>
                </button>
                <p className="text-grey">Today</p>
              </div>
              <small className="text-grey">19</small>
            </div>
            <div className={`${ activeView === "nextWeek" && "bg-light-grey" } flex justify-between py-1 px-2 rounded-lg items-center`}>
              <div className="flex gap-x-2 items-center">
                <button className="cursor-pointer" onClick={() => {setActiveView("nextWeek"); setBoardTitle("Next 7 Days")}}>
                  <NextWeekIcon className="text-grey"/>
                </button>
                <p className="text-grey">Next 7 Days</p>
              </div>
              <small className="text-grey">19</small>
            </div>
            <div className={`${ activeView === "summary" && "bg-light-grey" } flex justify-between py-1 px-2 rounded-lg items-center`}>
              <div className="flex gap-x-2 items-center">
                <button className="cursor-pointer" onClick={() => {setActiveView("summary"); setBoardTitle("Summary")}}>
                  <SummaryIcon className="text-grey"/>
                </button>
                <p className="text-grey">Summary</p>
              </div>
              <small className="text-grey">19</small>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-y-2 w-full flex-col mt-2">
            <div className={`${ activeStatus === "complete" && "bg-light-grey" } flex justify-between py-1 px-2 rounded-lg items-center`}>
              <div className="flex gap-x-2 items-center">
                <button className="cursor-pointer" onClick={() => setActiveStatus("complete")}>
                  <CheckIcon className="text-grey"/>
                </button>
                <p className="text-grey">Completed</p>
              </div>
            </div>
            <div className={`${ activeStatus === "notDo" && "bg-light-grey" } flex justify-between py-1 px-2 rounded-lg items-center`}>
              <div className="flex gap-x-2 items-center">
                <button className="cursor-pointer" onClick={() => setActiveStatus("notDo")}>
                  <WrongIcon className="text-grey"/>
                </button>
                <p className="text-grey">Won't Do</p>
              </div>
            </div>
            <div className={`${ activeStatus === "trash" && "bg-light-grey" } flex justify-between py-1 px-2 rounded-lg items-center`}>
              <div className="flex gap-x-2 items-center">
                <button className="cursor-pointer" onClick={() => setActiveStatus("trash")}>
                  <TrashIcon className="text-grey"/>
                </button>
                <p className="text-grey">Trash</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}