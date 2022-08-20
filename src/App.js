import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer";
import Header from "./pages/Shared/Header";


function App() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
