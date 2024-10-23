import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Componets/Sidebar.tsx';
import Home from './Pages/Home.tsx';
import Stores from './Pages/Stores.tsx';
import Settings from './Pages/Settings.tsx';
import Catalogue from './Pages/Catalogue.tsx';
import Docs from './Pages/Docs.tsx';
import Promotions from './Pages/Promotions.tsx';
import Reports from './Pages/Reports.tsx';
import ProductList from './Pages/Products.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-[100vh] font-work-sans">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8 h-full bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/Catalogue" element={<Catalogue />} />
            <Route path="/Docs" element={<Docs />} />
            <Route path="/Promotions" element={<Promotions />} />
            <Route path="/Reports" element={<Reports />} />

         
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;