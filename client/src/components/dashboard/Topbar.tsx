import SidebarIcon from "../../assets/dashboard/sidebar.svg?react"
import FilterIcon from "../../assets/dashboard/filter.svg?react"
import EllipsisIcon from "../../assets/dashboard/ellipsis.svg?react"
import ToggledSidebarIcon from "../../assets/dashboard/toggledSidebar.svg?react"
import type { SetStateAction } from "react"

type TopbarProps = {
  activeTopTab: string
  setActiveTopTab: React.Dispatch<SetStateAction<string>>
  toggleSidebar: boolean
  setToggleSidebar: React.Dispatch<SetStateAction<boolean>>
  topButtonStyles: string
  boardTitle: string
}

export default function Topbar({ activeTopTab, setActiveTopTab, toggleSidebar, setToggleSidebar, topButtonStyles, boardTitle }: TopbarProps) {
  return (
    <>
      <section className="w-full">
        <div className="w-full px-3 py-2">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center gap-x-2">
              <button onClick={() => {setActiveTopTab("sidebar"); setToggleSidebar(prev => !prev)}}>
                { toggleSidebar ? <ToggledSidebarIcon className={`${activeTopTab === "sidebar" && "bg-light-grey"} ${topButtonStyles} text-grey`} /> :                     <SidebarIcon className={`${activeTopTab === "sidebar" && "bg-light-grey"} ${topButtonStyles} text-grey`} /> }
              </button>
              <h5 className="text-grey">{ boardTitle }</h5>
            </div>
            <div className="flex items-center gap-x-3">
              <button onClick={() => setActiveTopTab("filter")}>
                <FilterIcon className={`${activeTopTab === "filter" && "bg-light-grey"} ${topButtonStyles} text-grey`} />
              </button>
              <button onClick={() => setActiveTopTab("ellipsis")}>
                <EllipsisIcon className={`${activeTopTab === "ellipsis" && "bg-light-grey"} ${topButtonStyles} text-grey`} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}