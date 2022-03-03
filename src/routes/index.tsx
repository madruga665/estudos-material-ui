import { Route, Routes } from "react-router-dom";
import FormPage from "../pages/FormPage";
import HomePage from "../pages/HomePage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/form' element={<FormPage />} />
    </Routes>
  );
};

export default MyRoutes;
