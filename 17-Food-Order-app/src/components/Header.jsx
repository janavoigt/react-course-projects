import logoImg from "../assets/logo.jpg";
import Button from "./Button.jsx";

export default function Haeder() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo-img-app" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
