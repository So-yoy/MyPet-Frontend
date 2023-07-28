import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Header from "../navigation/Header";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default AppRouter;
