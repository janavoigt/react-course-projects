import NewProject from "./components/NewProject";
import NoProjectselected from "./components/NoProjectselected";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      <NoProjectselected />
    </main>
  );
}

export default App;
