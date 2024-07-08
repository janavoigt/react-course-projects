import CoreConcept from "./components/CoreConcepts";
import Header from "./components/Header";

import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </div>
  );
}

export default App;
