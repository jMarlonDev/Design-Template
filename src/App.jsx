import "./App.css";
import { Navbar } from "./layout/Navbar/Navbar";
import { Presentation } from "./layout/Presentation/Presentation";
import { Cards } from "./layout/Cards/Cards";

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Cards />
    </>
  );
}

export default App;
