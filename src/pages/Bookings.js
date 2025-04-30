import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export default function Bookings() {
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (!user) navigate('/login');
        });

        return () => unsub();
    }, [navigate]);

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Your Bookings</h2>
            <p>Here is a list of your past and upcoming reservations.</p>
            <ul>
                <li>🏡 Modern Apartment – New York – May 10-14</li>
                <li>🌊 Beach House – Malibu – July 2-5</li>
                <li>🌲 Lakeview Cabin – Colorado – September 1-3</li>
            </ul>
        </div>
    );
}
