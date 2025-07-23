import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Briefcase, HelpCircle, Heart, User } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>("/");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const navItems: NavItem[] = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Projects", path: "/projects", icon: <Briefcase size={18} /> },
    { name: "About Me", path: "/about", icon: <User size={18} /> },
    { name: "FAQ", path: "/faq", icon: <HelpCircle size={18} /> },
    { name: "Hobbies", path: "/hobbies", icon: <Heart size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-[70px] flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            CS Portfolio
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
              {activeItem === item.path && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="navbar-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md hover:bg-accent"
            onClick={() =>
              console.log("Mobile menu toggle - implement dropdown")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - would be implemented with a dropdown */}
    </nav>
  );
};

export default Navbar;
