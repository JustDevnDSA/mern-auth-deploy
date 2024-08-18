import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AddBookmarkPage from "./pages/AddBookmarkPage";
import EditBookmarkPage from "./pages/EditBookmarkPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="app overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addBookmark" element={<AddBookmarkPage />} />
        <Route path="/editBookmark/:id" element={<EditBookmarkPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
