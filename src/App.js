import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";

import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
