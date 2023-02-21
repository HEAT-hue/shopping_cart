// jshint esversion:6
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components";
import { HomePage, AboutPage, ContactPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>

  )
}

export default App;