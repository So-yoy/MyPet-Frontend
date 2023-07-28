import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Header from "../navigation/Header";
import SignUp from "./SignUp";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default AppRouter;
