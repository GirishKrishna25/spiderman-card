import "./styles.css";
import Details from "./components/Details";
import Description from "./components/Description";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="container">
      <Details />
      <Description />
      <Contact />
    </div>
  );
}
