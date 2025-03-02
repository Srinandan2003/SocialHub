import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function MainNav({ onMenuClick, className }) {
    return (
        <div className={cn("flex items-center gap-6 md:gap-10", className)}>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
            </Button>
            <Link href="/" className="flex items-center space-x-2">
                <span className="hidden font-bold sm:inline-block text-xl">Nexus</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                </Link>
                <Link href="/explore" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    Explore
                </Link>
                <Link href="/projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    Projects
                </Link>
                <Link href="/resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                    Resources
                </Link>
            </nav>
        </div>
    );
}
