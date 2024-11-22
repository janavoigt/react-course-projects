import { useEffect, useState } from "react";
import { fechtAvailableMeals } from "../http.js";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const meals = await fechtAvailableMeals();

        setLoadedMeals(meals);
      } catch (error) {}
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
