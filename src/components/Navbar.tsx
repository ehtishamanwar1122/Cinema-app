
import { Link } from "react-router-dom";
import { Menu, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-black/95 text-white fixed w-full z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              CineMax
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/movies" className="hover:text-primary transition-colors">
              Movies
            </Link>
            <Link to="/showtimes" className="hover:text-primary transition-colors">
              Showtimes
            </Link>
            <Link to="/dashboard" className="hover:text-primary transition-colors">
              Dashboard
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
