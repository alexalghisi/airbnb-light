// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Listing from './pages/Listing';
import Bookings from './pages/Bookings';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/listing/:id" element={<Listing />} />
                <Route path="/bookings" element={<Bookings />} />
            </Routes>
        </Router>
    );
}

export default App;
