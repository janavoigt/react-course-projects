import logoImg from "../assets/logo.jpg";

export default function Haeder() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo-img-app" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
