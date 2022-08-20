import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Purchase from "./pages/Home/Purchase";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import Footer from "./pages/Shared/Footer";
import Header from "./pages/Shared/Header";


function App() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
