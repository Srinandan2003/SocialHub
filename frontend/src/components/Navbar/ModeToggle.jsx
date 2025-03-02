import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./SideBar";

export function MobileSidebar({ isOpen, onClose }) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
