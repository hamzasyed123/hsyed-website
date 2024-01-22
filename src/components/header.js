import { Link } from "react-router-dom"
import "../style/components/header.css"

function Header() {
    return (
        <header>
            <Link className="main-link" to="/">Hamza Syed</Link>
        </header>
    )
}

export default Header