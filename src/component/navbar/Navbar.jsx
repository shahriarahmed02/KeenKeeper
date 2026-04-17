import { NavLink } from "react-router-dom";
import { Home, History, BarChart3 } from "lucide-react";
import logo from "../../assets/logo.png"
const Navbar = () => {
    // Active link styling function
    const activeStyle = ({ isActive }) => 
        isActive ? "bg-[#244D3F] text-white font-semibold  p-2 flex items-center  rounded-sm" 
                 : "hover:text-[#244D3F] transition-all p-2 flex items-center";

    return (
        <nav className="navbar bg-base-100 px-4 md:px-12 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
              <img src={logo} alt="logo" />
            </div>
            <div className="navbar-end">
                <ul className="flex gap-6 text-sm uppercase tracking-wider">
                    <li>
                        <NavLink to="/" className={activeStyle}>
                            <Home size={16} /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/timeline" className={activeStyle}>
                            <History size={16} />Timeline
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className={activeStyle}>
                            <BarChart3 size={16} />Stats
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;