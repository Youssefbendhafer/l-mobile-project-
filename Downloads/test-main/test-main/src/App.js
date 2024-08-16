import React, { useState } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import MainContainer from "./components/MainContainer/MainContainer";
import "./App.css"; // Assurez-vous d'ajouter le fichier CSS pour le style

const App = () => {
  const [selectedPage, setSelectedPage] = useState("");

  const handleSelect = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="app-container">
      <Sidebar onSelect={handleSelect} />
      <MainContainer content={selectedPage} />
    </div>
  );
};

export default App;
