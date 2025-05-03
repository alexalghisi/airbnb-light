// src/components/Listings.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'services/firebase';,,

const Listings = () => {
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [search, setSearch] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        const fetchListings = async () => {
            const listingsCollection = collection(db, 'listings');
            const listingsSnapshot = await getDocs(listingsCollection);
            const listingsData = listingsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setListings(listingsData);
            setFilteredListings(listingsData);
        };

        fetchListings();
    }, []);

    useEffect(() => {
        let results = listings;

        if (search) {
            results = results.filter(listing =>
                listing.location.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (maxPrice) {
            results = results.filter(listing => listing.price <= parseFloat(maxPrice));
        }

        setFilteredListings(results);
    }, [search, maxPrice, listings]);

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Explore Listings</h2>

            <div className="flex space-x-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by location"
                    className="border p-2 rounded w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Max price"
                    className="border p-2 rounded w-full"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredListings.map(listing => (
                    <div key={listing.id} className="border rounded-lg p-4 shadow-sm">
                        <h3 className="font-semibold text-lg">{listing.title}</h3>
                        <p className="text-sm text-gray-600">{listing.location}</p>
                        <p className="text-sm font-semibold">${listing.price} / night</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listings;
