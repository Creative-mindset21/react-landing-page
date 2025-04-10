import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
    </main>
  );
};

export default App;
