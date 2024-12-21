import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
// import Home from "./Home"


const Main = () => {
  return (
    <div className="flex flex-row">
        <SideBar />
        <div className="display-container w-4/5 ml-80 h-screen ">
            {/* <Home /> */}
            <Outlet /> 
        </div>
    </div>
  )
}

export default Main