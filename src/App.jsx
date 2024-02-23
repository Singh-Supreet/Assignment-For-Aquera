import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header";

const App = () => {
  return (
    <div style={{ background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)" }} className="h-auto" >
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
