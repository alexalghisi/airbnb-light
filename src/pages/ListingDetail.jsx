import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase"; // Todo: @ import soon

export default function ListingDetail() {
    const { listingId } = useParams();
    const navigate = useNavigate();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const docRef = doc(db, "listings", listingId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setListing({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.warn("No listing found!");
                }
            } catch (error) {
                console.error("Error fetching listing:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchListing();
    }, [listingId]);

    if (loading) return <div className="text-center py-10">Se încarcă...</div>;
    if (!listing) return <div className="text-center py-10 text-red-500">Locuința nu a fost găsită.</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <button
                onClick={() => navigate("/listings")}
                className="mb-6 inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition"
            >
                ← Back to listings
            </button>

            <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
            <p className="text-gray-600">{listing.location}</p>
            <p className="text-green-600 font-semibold text-lg mt-2">${listing.price} / noapte</p>

            <div className="mt-6 text-gray-700 leading-relaxed">
                {listing.description || "Nu există o descriere pentru această locuință."}
            </div>

            {listing.imageUrl && (
                <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="mt-6 rounded-xl shadow-lg w-full object-cover max-h-[500px]"
                />
            )}
        </div>
    );
}
