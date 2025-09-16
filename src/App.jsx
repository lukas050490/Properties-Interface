import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import Properties from "./pages/Properties";
import ManageProperties from "./pages/Admin/ManageProperties";
import ManageVisits from "./pages/Admin/ManageVisits";
import ProtectedRoute from "./components/ProtectedRoute";




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />
          <Route
            path="/admin/properties"
            element={<ManageProperties />}
          />
          <Route
            path="/admin/visits"
            element={<ManageVisits />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

