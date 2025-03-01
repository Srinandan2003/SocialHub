import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Home, 
  Search, 
  Users, 
  Briefcase, 
  BookOpen, 
  MessageSquare, 
  Calendar, 
  Settings, 
  HelpCircle,
  PlusCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Sidebar({ className }) {
    const navigate = useNavigate();

  return (
    <div className={cn("pb-12", className)}>
      <ScrollArea className="h-full">
        <div className="space-y-4 py-4">
          <div className="px-4 py-2">
            <Button onClick={() => navigate("/create-project")} className="w-full justify-start gap-2" variant="default">
              <PlusCircle className="h-4 w-4" />
              Create Project
            </Button>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
              <Button onClick={() => navigate("/")} variant="ghost" className="w-full justify-start gap-2">
                <Home className="h-4 w-4" />
                Home
              </Button>
              <Button onClick={() => navigate("/explore")} variant="ghost" className="w-full justify-start gap-2">
                <Search className="h-4 w-4" />
                Explore
              </Button>
              <Button onClick={() => navigate("/communities")} variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Communities
              </Button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Collaborate
            </h2>
            <div className="space-y-1">
              <Button onClick={() => navigate("/projects")} variant="ghost" className="w-full justify-start gap-2">
                <Briefcase className="h-4 w-4" />
                Projects
              </Button>
              <Button onClick={() => navigate("/resources")} variant="ghost" className="w-full justify-start gap-2">
                <BookOpen className="h-4 w-4" />
                Resources
              </Button>
              <Button onClick={() => navigate("/discussions")} variant="ghost" className="w-full justify-start gap-2">
                <MessageSquare className="h-4 w-4" />
                Discussions
              </Button>
              <Button onClick={() => navigate("/events")} variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Events
              </Button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Support
            </h2>
            <div className="space-y-1">
              <Button onClick={() => navigate("/settings")} variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
              <Button onClick={() => navigate("/help")} variant="ghost" className="w-full justify-start gap-2">
                <HelpCircle className="h-4 w-4" />
                Help & FAQ
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
