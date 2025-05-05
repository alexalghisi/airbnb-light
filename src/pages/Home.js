import { useState } from 'react';
import { Link } from 'react-router-dom'; // ← Don't forget this
import ListingCard from 'components/ListingCard';
import fakeListings from 'data/fakeListings';

import 'styles/home.css';

export default function Home() {
    const [search, setSearch] = useState('');

    const filteredListings = fakeListings.filter(listing =>
        listing.title.toLowerCase().includes(search.toLowerCase()) ||
        listing.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">
            <header className="hero">
                <h1>Welcome to Airbnb-Light</h1>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search destinations..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </header>

            <section className="listings">
                {filteredListings.length === 0 && <p>No results found</p>}
                {filteredListings.map(listing => (
                    <Link
                        key={listing.id}
                        to={`/listing/${listing.id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <ListingCard {...listing} />
                    </Link>
                ))}
            </section>
        </div>
    );
}
