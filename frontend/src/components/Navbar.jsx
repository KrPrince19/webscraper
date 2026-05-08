import { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative py-4 px-6 md:px-16 bg-[#0b0f19]/70 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Link to="/" onClick={closeMenu} className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-500 tracking-tight">
          NewsScraper
        </Link>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-slate-400 font-medium transition-colors hover:text-slate-50">
            Total Data
          </Link>
          
          {user ? (
            <>
              <Link to="/bookmarks" className="text-slate-400 font-medium transition-colors hover:text-slate-50">
                Bookmarked Data
              </Link>

              <button onClick={logout} className="bg-white/5 shadow-none border border-white/10 text-white py-2 px-6 rounded-full font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-slate-400 font-medium transition-colors hover:text-slate-50">
                Login
              </Link>

              <Link to="/register" className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white py-2 px-6 rounded-full font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] shadow-[0_4px_15px_rgba(99,102,241,0.3)]">
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 pb-4 pt-2 border-t border-white/10">
          <Link to="/" onClick={closeMenu} className="block text-slate-400 font-medium hover:text-slate-50 hover:bg-white/5 rounded-lg transition-colors py-3 px-4">
            Total Data
          </Link>
          
          {user ? (
            <>
              <Link to="/bookmarks" onClick={closeMenu} className="block text-slate-400 font-medium hover:text-slate-50 hover:bg-white/5 rounded-lg transition-colors py-3 px-4">
                Bookmarked Data
              </Link>
              <button onClick={() => { logout(); closeMenu(); }} className="w-full text-left text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 py-3 px-4 rounded-lg font-semibold mt-2 transition-colors">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={closeMenu} className="block text-slate-400 font-medium hover:text-slate-50 hover:bg-white/5 rounded-lg transition-colors py-3 px-4">
                Login
              </Link>
              <Link to="/register" onClick={closeMenu} className="block text-center bg-gradient-to-br from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-lg font-semibold mt-2 shadow-[0_4px_15px_rgba(99,102,241,0.3)]">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;