export async function fechtAvailableMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const resData = await response.json();

  if (!response) {
    throw new Error("Failed to fetch meals");
  }
  return resData;
}
