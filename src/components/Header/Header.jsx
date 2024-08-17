import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css"
const Header = () => {
    return (
        <nav className="header">
            <img src={logo}/>
            <div className="nav-links">
                <Link className="link" to={"/"}>Shop</Link>
                <Link className="link" to="/orders">Orders</Link>
                <Link className="link" to="/inventory">Inventory</Link>
                <Link className="link" to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;