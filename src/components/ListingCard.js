import React from "react";
import ListingCard from "./ListingCard";

const ListingsGrid = ({ listings = [] }) => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8">Locuințe disponibile</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {listings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </div>

            {listings.length === 0 && (
                <p className="text-gray-500 mt-8 text-center">
                    Nu există locuințe disponibile.
                </p>
            )}
        </div>
    );
};

export default ListingsGrid;
