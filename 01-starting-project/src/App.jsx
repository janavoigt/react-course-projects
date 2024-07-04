import { useState } from "react";
import CoreConcept from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "../lib/data";

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
          {!selectTopic ? (
            <p>Please select a Topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectTopic].title}</h3>
              <p>{EXAMPLES[selectTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
