import { useEffect, useState } from "react";
import { fetchListings } from "utils/fetchListings";

const  ListingsPage = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchListings();
                setListings(data || []); // fallback in case fetchListings returns undefined
            } catch (err) {
                setError("Eroare la încărcarea datelor.");
                console.error("Fetch failed:", err);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8">Locuințe disponibile</h1>

            {loading && <p className="text-gray-500 text-center">Se încarcă...</p>}

            {error && (
                <p className="text-red-500 text-center mt-4">{error}</p>
            )}

            {!loading && listings.length === 0 && !error && (
                <p className="text-gray-500 mt-8 text-center">Nu există locuințe disponibile.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {listings.map((listing) => (
                    <div
                        key={listing.id}
                        className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer"
                    >
                        <img
                            src={listing.imageUrl}
                            alt={listing.title}
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold truncate">{listing.title}</h2>
                            <p className="text-sm text-gray-500">{listing.location}</p>
                            <p className="text-md font-bold">{listing.price} €/noapte</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListingsPage;
