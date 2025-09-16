import { NavLink } from 'react-router-dom'
import Logo from "../assets/logo (3).png"

function Header() {

    return (
        <div className="bg-primaryDark h-64 min-w-screen p-6 text-secondaryLight flex  items-center justify-around gap-x-70 ">
            <h1 className="text-7xl font-bold mb-8 text-primaryLight">Luxury Imóveis</h1>
            <nav className="flex gap-6 text-xl font-semibold">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `block px-4 py-2 rounded hover:bg-primaryMid transition-colors ${isActive ? "bg-primaryMid" : ""}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/properties"
                    className={({ isActive }) =>
                        `block px-4 py-2 rounded hover:bg-primaryMid transition-colors ${isActive ? "bg-primaryMid" : ""}`
                    }
                >
                    Imóveis
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `block px-4 py-2 rounded hover:bg-primaryMid transition-colors ${isActive ? "bg-primaryMid" : ""}`
                    }
                >
                    Sobre
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        `block px-4 py-2 rounded hover:bg-primaryMid transition-colors ${isActive ? "bg-primaryMid" : ""}`
                    }
                >
                    Login
                </NavLink>
            </nav>
            <img src={Logo} alt="Logo da Luxury Imóveis" className="w-52 h-52 object-contain mr-30 rounded-3xl" />


        </div>
    )
}

export default Header;