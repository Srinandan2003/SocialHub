export default function Footer() {
    return (
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CollabSphere. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }