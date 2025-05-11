import {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from 'services/firebase';
import ListingCard from 'components/ListingCard';

export default function Home() {
    const [search, setSearch] = useState('');
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'listings'));
                const data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setListings(data);
            } catch (error) {
                console.error('Error fetching listings:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

    const filteredListings = listings.filter((listing) =>
        listing.title.toLowerCase().includes(search.toLowerCase()) ||
        listing.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">Welcome to Airbnb-Light</h1>
                <input
                    className="w-full sm:w-96 border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    type="text"
                    placeholder="Search listings..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </header>

            <section className="text-center mb-8">
                <h2 className="text-2xl font-semibold mb-4">Available Listings</h2>
                {loading ? (
                    <p className="text-gray-500">Loading listings...</p>
                ) : filteredListings.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredListings.map((listing) => (
                            <ListingCard key={listing.id} data={listing}/>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No listings available.</p>
                )}
            </section>
        </div>
    );
}
