import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
