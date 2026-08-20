import mainImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[generateRandomInt(2)];

  return (
    <header>
      <img src={mainImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
