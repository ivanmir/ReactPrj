import React from "react";
import "./App.css";
import NotFound from "pages/NotFound";
import AppBar from "components/AppBar";
import MasterPage from "pages/MasterPage";

const App = () => {
  return (
    <div className="App full-height">
      <AppBar />
      <MasterPage />
    </div>
  );
};

export default App;
