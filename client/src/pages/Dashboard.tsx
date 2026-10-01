import { useState } from "react"

import Sidebar from "../components/dashboard/Sidebar"
import Viewbar from "../components/dashboard/Viewbar"
import Topbar from "../components/dashboard/Topbar"

export default function Dashboard() {
  const [boardTitle, setBoardTitle] = useState<string>("All")
  const [activeSideTab, setActiveSideTab] = useState<string>("task")
  const [activeView, setActiveView] = useState<string>("all")
  const [activeStatus, setActiveStatus] = useState<string>("")
  const [activeTopTab, setActiveTopTab] = useState<string>("")
  const [showList, setShowList] = useState<boolean>(true)
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)

  const sideButtonStyles = "w-8 h-8"
  const topButtonStyles = "w-8 h-8 hover:bg-light-grey rounded-md p-1"

  return (
    <>
      <main className="min-h-screen w-full">
        <article className="bg-washed-white flex">

          <Sidebar
            activeSideTab={activeSideTab}
            setActiveSideTab={setActiveSideTab}
            sideButtonStyles={sideButtonStyles}
          />

          {toggleSidebar && (
            <Viewbar
              activeView={activeView}
              setActiveView={setActiveView}
              activeStatus={activeStatus}
              setActiveStatus={setActiveStatus}
              setBoardTitle={setBoardTitle}
            />
          )}

          <Topbar
            activeTopTab={activeTopTab}
            setActiveTopTab={setActiveTopTab}
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            topButtonStyles={topButtonStyles}
            boardTitle={boardTitle}
          />

        </article>
      </main>
    </>
  )
}