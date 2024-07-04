import { CORE_CONCEPTS } from "../../lib/data";

export default function TabButton() {
  function handleClick() {
    console.log("Hello Word");
  }

  return (
    <section id="examples">
      <menu>
        {CORE_CONCEPTS.map((titles, idx) => {
          return (
            <li key={idx}>
              <button onClick={handleClick}>{titles.title}</button>
            </li>
          );
        })}
      </menu>
    </section>
  );
}
