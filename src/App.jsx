import './App.css';
import NavigationAll from './Components/Navigation/NavigationAll';
import Shop from './Pages/Shop/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationAll />
      
      {/* Main content wrapper with padding-top to avoid navbar overlap */}
      <main style={{ paddingTop: 'calc(2rem + 4rem)' }} >
        <Routes>
          <Route path="/shop" element={<Shop />} />
          {/* Add other routes here as needed */}
          <Route path="*" element={<Shop />} /> {/* Default/fallback route */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
