
import { NavLink } from "react-router-dom";

function AdminSidebar() {

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <aside className="bg-[#031716] w-64 min-h-screen p-6 text-[#6BA3BE] flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-[#0C969C]">Admin Menu</h2>

      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-[#0A7075] transition-colors ${isActive ? "bg-[#0A7075]" : ""
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/properties"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-[#0A7075] transition-colors ${isActive ? "bg-[#0A7075]" : ""
            }`
          }
        >
          Gerenciar Imóveis
        </NavLink>
        <NavLink
          to="/admin/visits"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-[#0A7075] transition-colors ${isActive ? "bg-[#0A7075]" : ""
            }`
          }
        >
          Gerenciar Visitas
        </NavLink>
        <NavLink
          onClick={handleLogout}
          className="block px-4 py-2 rounded hover:bg-[#0A7075] transition-colors text-red-400"
        >
          Logout
        </NavLink>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
