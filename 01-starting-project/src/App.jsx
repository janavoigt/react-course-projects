import { useState } from "react";
import CoreConcept from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";

function App() {
  const [selectTopic, setSelectTopic] = useState();
  function handleSelect(selectButton) {
    setSelectTopic(selectButton);
  }
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <section id="examples">
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
