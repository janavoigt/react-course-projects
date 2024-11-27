import { useContext } from "react";
import Modal from "./Modal.jsx";
import CartContext from "./store/CartContext.jsx";
import { currencyFormatter } from "./util/formatting";
import Button from "./Button.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";

export default function Cart() {
  const { items, addItemToCart, removeItemCart } = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function hadleIncreaseItem(item) {
    addItemToCart(item);
  }

  function handleDecreaseItem(id) {
    removeItemCart(id);
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              {item.name} - {item.quantity} x {item.price}
            </p>
            <p className="cart-item-actions">
              <button onClick={() => handleDecreaseItem(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => hadleIncreaseItem(item)}>+</button>
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
