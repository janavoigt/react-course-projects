import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../lib/data";
import Section from "./Section";

export default function Examples() {
  const [selectTopic, setSelectTopic] = useState();

  function handleSelect(selectButton) {
    setSelectTopic(selectButton);
  }
  return (
    <Section title="EXAMPLES" id="examples">
      <menu>
        <TabButton
          isActive={selectTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isActive={selectTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isActive={selectTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isActive={selectTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
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
    </Section>
  );
}
