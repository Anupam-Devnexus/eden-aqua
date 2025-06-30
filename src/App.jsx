import './App.css';
import NavigationAll from './Components/Navigation/NavigationAll';
import Footer from './Components/SingleComponents/Footer';
import Shop from './Pages/Shop/Shop';
import Sustainibility from "./Pages/Sustainibility/Sustainibility"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Navigation */}
      <NavigationAll />

      {/* Main content wrapper */}
      <main className="min-h-screen pt-[6rem] ">
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/sustainability" element={<Sustainibility />} />


          {/* Add more routes here as needed */}

          {/* Redirect all unknown routes to /shop */}
          <Route path="*" element={<Navigate to="/shop" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
