import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectselected from "./components/NoProjectselected";
import ProjectSideBar from "./components/ProjectSideBar";
import { uid } from "uid";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(undefined);
  const [newProject, setNewProject] = useState(false);

  function handleStartAddProject() {
    setNewProject(true);
  }

  function handleCancelAddProject() {
    setNewProject(false);
    setSelectedProject(undefined);
  }

  function handleAddProject(projectData) {
    setProjects([...projects, { id: uid(), ...projectData }]);
    console.log(projects);
  }

  let content;

  if (newProject === true) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (selectedProject === undefined) {
    content = <NoProjectselected onAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onAddProject={handleStartAddProject}
        projects={projects}
      />
      {content}
    </main>
  );
}

export default App;
