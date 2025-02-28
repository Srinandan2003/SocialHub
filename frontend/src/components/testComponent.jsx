import { Button } from "@/components/ui/button";

function TestComponent() {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Testing shadcn/ui</h2>
      <Button variant="default">Default Button</Button>
      <Button variant="destructive" className="ml-2">Destructive Button</Button>
      <Button variant="outline" className="ml-2">Outline Button</Button>
    </div>
  );
}

export default TestComponent;