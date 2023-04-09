import { Link } from "react-router-dom";
import "../Styles/navmenu.css"

const NavMenu = () => {
    return (
        <div className="menu-wrapper">
            <ul className="menu">
                <section className="col-1">
                    <li className="menu-item"><Link to="/">Home</Link></li>
                    <li className="menu-item"><Link to="/about">About Us</Link></li>
                    <li className="menu-item"><Link to="/about">Services</Link></li>
                    <li className="menu-item"><Link to="/login">Contact Us</Link></li>
                </section>
                <section className="col-2">
                    <Link className="menu-item" to="/login"><button className="login-btn">Login</button></Link>
                </section>
            </ul>
        </div>
    );
}

export default NavMenu;