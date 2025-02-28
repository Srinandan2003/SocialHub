import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Button } from "../src/components/ui/button";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <>
    <div className="bg-red-500 text-white p-4 m-4 rounded-lg">
  This should be a red box with white text if Tailwind is working
</div>
    <Button/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;  