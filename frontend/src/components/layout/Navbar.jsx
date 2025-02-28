import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          CollabSphere
        </Link>
        <nav className="flex gap-6">
          <Link to="/projects" className="hover:text-primary">
            Projects
          </Link>
          <Link to="/teams" className="hover:text-primary">
            Teams
          </Link>
          <Link to="/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
        </nav>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}