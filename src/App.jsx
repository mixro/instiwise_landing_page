import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Features from './pages/features/Features';
import HowItWorks from './pages/howItworks/HowItWorks';
import Testimonials from './pages/testimonials/Testimonials';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/features' element={<Layout><Features /></Layout>} />
          <Route path='/how-it-works' element={<Layout><HowItWorks /></Layout>} />
          <Route path='/testimonials' element={<Layout><Testimonials /></Layout>} />
          <Route path='/contact' element={<Layout><Contact /></Layout>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
