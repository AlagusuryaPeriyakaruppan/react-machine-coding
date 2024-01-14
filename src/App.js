// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import components from "./constants";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const routeComponent = Object.keys(components).map((component) => (
    <Route
      key={component}
      path={`/${component}`}
      element={components[component]}
    />
  ));

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>{routeComponent}</Routes>
      </div>
    </Router>
  );
};

export default App;
