import React from "react"
import Header from "./components/Header/header"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Github from "./components/Github/Github"

export default function Layout(){
    return (
        <>
            <Header />
            <Outlet />          {/* this is used to render the child routes of the current route. It will render the component that is associated with the current route. For example, if the current route is '/', it will render the Home component. If the current route is '/about', it will render the About component. */}
            <Footer />
        </>
    )
}