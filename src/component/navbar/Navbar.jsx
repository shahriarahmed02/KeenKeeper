import { NavLink } from "react-router-dom";
import { Home, History, BarChart3 } from "lucide-react";

const Navbar = () => {
    // Active link styling function
    const activeStyle = ({ isActive }) => 
        isActive ? "text-primary font-bold border-b-2 border-primary pb-1 flex items-center gap-1" 
                 : "hover:text-primary transition-all flex items-center gap-1";

    return (
        <nav className="navbar bg-base-100 px-4 md:px-12 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="text-2xl font-bold text-primary">KeenKeeper</div>
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
                            <History size={16} /> Timeline
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className={activeStyle}>
                            <BarChart3 size={16} /> Stats
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;