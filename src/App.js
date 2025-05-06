import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from 'services/firebase';

import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Listing from './pages/Listing';
import Bookings from './pages/Bookings';
import Listings from './components/ListingsPage';
import ListingDetail from './pages/ListingDetail';

import './index.css';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);
        return () => unsubscribe();
    }, []);

    const logout = () => {
        signOut(auth);
    };

    return (
        <>
            <Navbar user={user} logout={logout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/listings/:listingId" element={<ListingDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/listing/:id" element={<Listing />} />
                <Route path="/bookings" element={<Bookings />} />
            </Routes>
        </>
    );
}

export default App;
