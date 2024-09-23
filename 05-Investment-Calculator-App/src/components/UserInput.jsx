import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Inicial Investment</label>
          <input
            type="number"
            required
            value={userInput.inicialInvestment}
            onChange={(event) =>
              onChange("inicialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestiment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected return</label>
          <input
            type="number"
            required
            value={userInput.expectReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange("durantion", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
