import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import Modal from "./pages/Modal";
import PageNotFound from "./pages/PageNotFound";
import NavigationBar from "./components/NavigationBar";
import { FC } from "react";

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
