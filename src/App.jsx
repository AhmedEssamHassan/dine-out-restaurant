import "./App.css";
import Home from "./components/Home/Home";
import { AppContext } from "./AbbContext";
import { useState } from "react";

function App() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenue = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <AppContext.Provider value={{ isNavMenuOpen, toggleNavMenue }}>
      <div className="App">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
