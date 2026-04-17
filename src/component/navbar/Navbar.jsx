import { NavLink } from "react-router-dom";
import { Home, History, BarChart3, Menu } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
    // Active link styling function
    const activeStyle = ({ isActive }) => 
        isActive ? "bg-[#244D3F] text-white font-semibold p-2 flex items-center rounded-sm gap-2" 
                 : "hover:text-[#244D3F] transition-all p-2 flex items-center gap-2";

    const navItems = (
        <>
            <li>
                <NavLink to="/" className={activeStyle}>
                    <Home size={16} /> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/timeline" className={activeStyle}>
                    <History size={16} /> Timeline
                </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className={activeStyle}>
                    <BarChart3 size={16} /> Stats
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="navbar bg-base-100 px-4 md:px-12 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                {/* Mobile Hamburger Menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden p-0 mr-2">
                        <Menu size={24} />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2 uppercase tracking-wider">
                        {navItems}
                    </ul>
                </div>
                
                {/* Logo */}
                <img src={logo} alt="logo" className="h-8 md:h-10" />
            </div>

            {/* Desktop Menu */}
            <div className="navbar-end hidden lg:flex">
                <ul className="flex gap-6 text-sm uppercase tracking-wider">
                    {navItems}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;