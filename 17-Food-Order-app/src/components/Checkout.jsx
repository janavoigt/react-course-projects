import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "./store/CartContext";
import { currencyFormatter } from "./util/formatting";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import UserProgressContext from "./store/UserProgressContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCheckout() {
    hideCheckout();
  }

  return (
    <Modal open={progress === "checkout"} onClose={handleCloseCheckout}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-mail Adress" type="email" id="e-mail" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
