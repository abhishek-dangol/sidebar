import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
function App() {
  document.title = "Dan Sidebar";
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
