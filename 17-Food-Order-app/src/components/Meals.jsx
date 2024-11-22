import { useEffect, useState } from "react";
import { fechtAvailableMeals } from "../http.js";
import MealsItem from "./MealsItem.jsx";

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
        <MealsItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
