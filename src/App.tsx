import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import EditArticle from "./pages/EditArticle";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/editor" element={<EditArticle />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
