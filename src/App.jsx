import './App.css';
import NavigationAll from './Components/Navigation/NavigationAll';
import Footer from './Components/SingleComponents/Footer';
import Shop from './Pages/Shop/Shop';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Navigation */}
      <NavigationAll />

      {/* Main content wrapper */}
      <main className="min-h-screen pt-[6rem] px-4 sm:px-6 md:px-8">
        <Routes>
          <Route path="/shop" element={<Shop />} />

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
