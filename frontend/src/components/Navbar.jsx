import { useContext } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center py-5 px-16 bg-[#0b0f19]/70 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-500 tracking-tight">NewsScraper</Link>

      <div className="flex gap-8 items-center">
        {user ? (
          <>
            <Link to="/bookmarks" className="text-slate-400 font-medium transition-colors hover:text-slate-50">
              Bookmarks
            </Link>

            <button onClick={logout} className="bg-white/5 shadow-none border border-white/10 text-white py-2.5 px-6 rounded-full font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-slate-400 font-medium transition-colors hover:text-slate-50">
              Login
            </Link>

            <Link to="/register" className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white py-2.5 px-6 rounded-full font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] shadow-[0_4px_15px_rgba(99,102,241,0.3)]">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;