import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import Modal from "./pages/Modal";
import PageNotFound from "./pages/PageNotFound";
import "./index.scss";
import Quiz from "./pages/Quiz";
import { UsersSearch } from "./pages/Users";
import Converter from "./pages/Convertor";
import NavigationBar from "./components/navbar/NavigationBar";
import Photos from "./pages/Photos";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/users" element={<UsersSearch />} />
          <Route path="/currency-converter" element={<Converter />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
