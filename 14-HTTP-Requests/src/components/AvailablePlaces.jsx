import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fecthPlaces() {
      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();
        setAvailablePlaces(resData.places);
      } catch (error) {
        console.log(error);
      }
    }
    fecthPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
