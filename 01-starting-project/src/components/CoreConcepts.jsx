import { CORE_CONCEPTS } from "../../lib/data";

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((cores, idx) => {
          return (
            <li key={idx}>
              <img src={cores.image} alt={cores.title} />
              <h2>{cores.title}</h2>
              <p>{cores.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
