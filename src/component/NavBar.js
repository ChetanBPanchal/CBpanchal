import "./navbar.css"
import { Link } from "react-router-dom" 

export default function NavBar() {
    
    return (
    <nav className="nav_style">
        <Link to="/" className="nav_head_name">CP</Link>
        <ul className="nav_ul_style">
            <CustomeLink to="/" className="nav_menu">Home</CustomeLink>
            <CustomeLink to="/about" className="nav_menu">About</CustomeLink>
            <CustomeLink to="/exp" className="nav_menu">Experience</CustomeLink>
        </ul>
    </nav>
    )
}


function CustomeLink({to, children, ...props}) {
    const path = window.location.pathname

    return (
        <li className = {path === to ? "active" : "" }>
            <Link to={to} {...props}>
                {children} 
            </Link>
        </li>
    )
}