import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import EditArticle from "./pages/EditArticle";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/editor" element={<EditArticle />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
