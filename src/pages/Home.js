import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListingCard from 'components/ListingCard';
import fakeListings from 'data/fakeListings';

export default function Home() {
    const [search, setSearch] = useState('');

    const filteredListings = fakeListings.filter(listing =>
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
                    placeholder="Search destinations..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </header>

            {filteredListings.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No results found.</p>
            ) : (
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredListings.map(listing => (
                        <Link
                            key={listing.id}
                            to={`/listing/${listing.id}`}
                            className="text-inherit no-underline"
                        >
                            <ListingCard {...listing} />
                        </Link>
                    ))}
                </section>
            )}
        </div>
    );
}
