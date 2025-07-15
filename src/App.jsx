import { Routes, Route } from "react-router-dom";
import MainLayout from "./Component/MainLayout";
import Home from "./Component/Home";

import Appointment from "./Component/Appointment";
import Location from "./Component/Location";
import OurServices from "./Component/OurServices";
import OurProducts from "./Component/OurProduct";
import OurProductMen from "./Component/OurProductMen";
import ProtectedRoute from "./Component/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/ourServices"
          element={
            <ProtectedRoute>
              <OurServices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ourProduct"
          element={
            <ProtectedRoute>
              <OurProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ourProductMen"
          element={
            <ProtectedRoute>
              <OurProductMen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          }
        />
        <Route path="/location" element={<Location />} />
      </Route>
    </Routes>
  );
}

export default App;
