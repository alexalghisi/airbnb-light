import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import 'styles/bookings.css';

const mockBookings = [
    {
        id: 1,
        title: 'Modern Apartment',
        location: 'New York, USA',
        dates: 'May 10 – May 14',
        image: 'https://picsum.photos/id/1018/400/300',
    },
    {
        id: 2,
        title: 'Beach House',
        location: 'Malibu, USA',
        dates: 'July 2 – July 5',
        image: 'https://picsum.photos/id/1011/400/300',
    },
    {
        id: 3,
        title: 'Lakeview Cabin',
        location: 'Colorado, USA',
        dates: 'Sep 1 – Sep 3',
        image: 'https://picsum.photos/id/1025/400/300',
    },
];

export default function Bookings() {
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (!user) navigate('/login');
        });

        return () => unsub();
    }, [navigate]);

    return (
        <div className="bookings-page">
            <h2>Your Bookings</h2>
            <p className="subheading">Here are your upcoming stays:</p>

            <div className="bookings-list">
                {mockBookings.map(booking => (
                    <div key={booking.id} className="booking-card">
                        <img src={booking.image} alt={booking.title} />
                        <div className="booking-info">
                            <h3>{booking.title}</h3>
                            <p>{booking.location}</p>
                            <p className="dates">{booking.dates}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
