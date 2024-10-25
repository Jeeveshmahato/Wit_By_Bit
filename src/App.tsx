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
import Pro from './Pages/Pro.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-full p-2 overflow-hidden font-work-sans">
        {/* Sidebar */}
        <Sidebar />
        <div className=" w-[1px] h-[100vh] bg-[#ebebeb] border border-[#ebebeb] mx-[24px]"></div>

        {/* Main Content */}
        <div className="flex-1 md:px-4 lg:px-8 h-full bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/Catalogue" element={<Catalogue />} />
            <Route path="/Docs" element={<Docs />} />
            <Route path="/Promotions" element={<Promotions />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Pro" element={<Pro />} />

         
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
