import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);

  return <p>Results...</p>;
}
