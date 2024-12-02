import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./Button.jsx";
import CartContext from "./store/CartContext.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";

export default function Haeder() {
  const { items } = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo-img-app" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
