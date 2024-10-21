import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectselected from "./components/NoProjectselected";
import ProjectSideBar from "./components/ProjectSideBar";
import { uid } from "uid";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projects, setProjects] = useState([
    {
      id: "1234",
      title: "Project 1",
      description: "Desc of proj 1",
      dueDate: new Date(),
      tasks: [],
    },
    {
      id: "5678",
      title: "Project 2",
      description: "Desc of proj 2",
      dueDate: new Date(),
      tasks: [],
    },
  ]);
  const [selectedProject, setSelectedProject] = useState(undefined);
  const [newProject, setNewProject] = useState(false);

  function handleAddTask() {}

  function handleDeleteTask() {}

  function handleStartAddProject() {
    setNewProject(true);
  }

  function handleCancelAddProject() {
    setNewProject(false);
    setSelectedProject(undefined);
  }

  function handleSelectProject(id) {
    setSelectedProject(id);
  }

  function handleAddProject(projectData) {
    const id = uid();
    setNewProject(false);
    setProjects([...projects, { id, ...projectData }]);
    setSelectedProject(id);
    console.log(projects);
  }

  function handleDeleteProject() {
    setSelectedProject(undefined);
    setProjects(projects.filter((project) => project.id !== selectedProject));
  }

  let content;

  if (newProject === true) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (selectedProject === undefined) {
    content = <NoProjectselected onAddProject={handleStartAddProject} />;
  } else {
    let selected = projects.find((project) => project.id === selectedProject);
    content = (
      <SelectedProject
        project={selected}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onSelectProject={handleSelectProject}
        onAddProject={handleStartAddProject}
        projects={projects}
      />
      {content}
    </main>
  );
}

export default App;
