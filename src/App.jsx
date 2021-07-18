import "./App.css";
import Home from "./components/Home/Home";
import { AppContext } from "./AbbContext";
import { useEffect, useState } from "react";
import { menu } from "./data";

function App() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [category, setCategory] = useState("lunch");

  const toggleNavMenue = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const [list, setList] = useState(menu);

  const filterCategory = (cat) => {
    setCategory(cat);
  };

  useEffect(() => {
    const newList = menu.filter((item) => item.catigory === category);
    console.log(newList);
    setList(newList);
  }, [category]);

  return (
    <AppContext.Provider
      value={{
        isNavMenuOpen,
        toggleNavMenue,
        filterCategory,
        list,
      }}
    >
      <div className="App">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
