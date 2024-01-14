import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import Employee from './components/Employees/Employee';
import Add from './components/Add/Add';
import Navbar from './components/Navbar/Navbar';
import Edit from './components/Edit/Edit';
import Footer from "./components/Footer/Footer";
// import { useEffect, useState } from "react";

function App() {
        // const [darkMode, setDarkMode] = useState(
        //   localStorage.getItem("darkMode") === "true"
        // );

        // useEffect(() => {
        //   localStorage.setItem("darkMode", darkMode);
        // }, [darkMode]);

        // function toggleDarkMode() {
        //   setDarkMode((prevMode) => !prevMode);
        // }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
