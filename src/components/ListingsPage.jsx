    import { useEffect, useState } from "react";
    import { fetchListings } from "../utils/fetchListings";
    import { Link } from "react-router-dom";

    const ListingsPage = () => {
        const [listings, setListings] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const getData = async () => {
                try {
                    const data = await fetchListings();
                    setListings(data || []);
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
                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {listings.map((listing) => (
                        <Link to={`/listings/${listing.id}`} key={listing.id}>
                            <div className="p-4 border rounded-xl shadow hover:shadow-lg transition cursor-pointer bg-white">
                                {listing.imageUrl && (
                                    <img
                                        src={listing.imageUrl}
                                        alt={listing.title}
                                        className="w-full h-48 object-cover rounded-md mb-3"
                                    />
                                )}
                                <h2 className="text-xl font-semibold">{listing.title}</h2>
                                <p className="text-gray-600">{listing.location}</p>
                                <p className="text-green-600 font-medium mt-2">${listing.price} / noapte</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    export default ListingsPage;
