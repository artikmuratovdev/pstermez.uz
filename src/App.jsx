import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article';
import Videos from './pages/Videos';
import News from './pages/News';
import SchoolTeam from './pages/SchoolTeam';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/category" element={<Category />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/premium" element={<Videos />} />
            <Route path="/maktab-jamoasi" element={<SchoolTeam />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
