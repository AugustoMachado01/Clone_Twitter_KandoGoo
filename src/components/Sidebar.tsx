// src/components/Sidebar.tsx
import { Home, Search, Bell, Mail, User, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 border-r border-gray-700 hidden md:block">
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded"
            >
              <Home /> Página Inicial
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded"
            >
              <Search /> Explorar
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded"
            >
              <Bell /> Notificações
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded"
            >
              <Mail /> Mensagens
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded"
            >
              <User /> Perfil
            </Link>
          </li>
          <li>
            <button className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded w-full">
              <MoreHorizontal /> Mais
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
