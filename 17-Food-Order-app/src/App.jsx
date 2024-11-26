import Haeder from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./components/store/CartContext.jsx";

function App() {
  return (
    <CartContextProvider>
      <Haeder />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
