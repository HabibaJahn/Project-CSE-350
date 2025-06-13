import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import "./layout.scss"
import { AuthContext } from "../../context/AuthContext"
import { useContext, useEffect } from "react"

function Layout(){
    return(
        <div className="layout">
            <div className="navbar">
                <Navbar/>
            </div>

            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}
function RequireAuth(){
    const {currentUser} = useContext(AuthContext);

    return(

        currentUser==="null" ? (<Navigate to = "/login"/> 

        ):( 
        <div className="layout">
            <div className="navbar">
                <Navbar/>
            </div>

            <div className="content">
                <Outlet/>
            </div>
        </div>
        )
    )
}

export { Layout , RequireAuth}