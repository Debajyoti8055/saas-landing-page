
import { useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-lg z-50 shadow-sm border-b dark:border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-purple-400 dark:to-violet-400 text-transparent bg-clip-text">
              SaaSly
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-indigo-600 dark:hover:text-purple-400">Features</a>
            <a href="#pricing" className="text-foreground hover:text-indigo-600 dark:hover:text-purple-400">Pricing</a>
            <a href="#testimonials" className="text-foreground hover:text-indigo-600 dark:hover:text-purple-400">Testimonials</a>
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4 text-foreground" />
              <Switch onCheckedChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <button className="bg-indigo-600 dark:bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 dark:hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4 text-foreground" />
              <Switch onCheckedChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-indigo-600 dark:hover:text-purple-400">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-indigo-600 dark:hover:text-purple-400">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 text-foreground hover:text-indigo-600 dark:hover:text-purple-400">Testimonials</a>
              <button className="w-full mt-4 bg-indigo-600 dark:bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 dark:hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
