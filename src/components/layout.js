import Header from "./header"
import Footer from "./footer"
import { Outlet } from "react-router-dom"
import "../style/components/layout.css"

function Layout() {

    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout