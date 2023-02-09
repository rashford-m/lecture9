import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from ".Navbar";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/profile" element={<Profile username={username} />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
