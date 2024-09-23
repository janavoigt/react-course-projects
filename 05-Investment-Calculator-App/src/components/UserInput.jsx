import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    inicialInvestment: 10000,
    annualInvestment: 1200,
    expectReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

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
              handleChange("inicialInvestment", event.target.value)
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
              handleChange("annualInvestiment", event.target.value)
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
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange("durantion", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
