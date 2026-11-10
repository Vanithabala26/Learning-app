import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EntriesPage from "./pages/EntriesPage";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/entries">Entries</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entries" element={<EntriesPage />} />
      </Routes>
    </>
  );
}