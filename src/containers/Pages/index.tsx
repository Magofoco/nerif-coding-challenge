import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import ErrorPage from "../ErrorPage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Pages;
