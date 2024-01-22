import { Link } from "react-router-dom"
import "../style/components/footer.css"

function Footer() {
    return (
        <footer>
            <h3>Links</h3>
            <div className="social-links">
                <Link to="https://www.linkedin.com/in/hamza-syed-488904216/">LinkedIn</Link>
                <Link to="https://github.com/hamzasyed123">Github</Link>
            </div>
        </footer>
    )
}

export default Footer