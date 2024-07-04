import CoreConcept from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <TabButton />
      </main>
    </div>
  );
}

export default App;
