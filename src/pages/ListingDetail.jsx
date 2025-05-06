import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../services/firebase"; // Todo: @ import soon

export default function ListingDetail() {
    const { listingId } = useParams();
    const navigate = useNavigate();

    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const docRef = doc(db, "listings", listingId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setListing({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.warn("Listing not found.");
                }
            } catch (error) {
                console.error("Error fetching listing:", error);
            } finally {
                setLoading(false);
            }
        };

        const fetchReviews = async () => {
            try {
                const reviewsRef = collection(db, "listings", listingId, "reviews");
                const q = query(reviewsRef, orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                const reviewsList = querySnapshot.docs.map(doc => doc.data());
                setReviews(reviewsList);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchListing();
        fetchReviews();
    }, [listingId]);

    const getAverageRating = () => {
        if (reviews.length === 0) return 0;
        const total = reviews.reduce((acc, curr) => acc + curr.rating, 0);
        return (total / reviews.length).toFixed(1);
    };

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (!listing) return <div className="text-center py-10 text-red-500">Listing not found.</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <button
                onClick={() => navigate("/listings")}
                className="mb-6 inline-block bg-rose-500 text-white px-5 py-2 rounded-full shadow hover:bg-rose-600 transition duration-200"
            >
                ← Back to listings
            </button>

            <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
            <p className="text-gray-600">{listing.location}</p>
            <p className="text-green-600 font-semibold text-lg mt-2">${listing.price} / night</p>

            {reviews.length > 0 && (
                <div className="mt-2 text-yellow-500 text-sm">
                    ⭐ {getAverageRating()} from {reviews.length} review{reviews.length > 1 ? "s" : ""}
                </div>
            )}

            <div className="mt-6 text-gray-700 leading-relaxed">
                {listing.description || "No description provided for this listing."}
            </div>

            {listing.imageUrl && (
                <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="mt-6 rounded-xl shadow-lg w-full object-cover max-h-[500px]"
                />
            )}

            {/* Reviews section */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

                {reviews.length === 0 && (
                    <p className="text-gray-500">No reviews for this listing yet.</p>
                )}

                <ul className="space-y-4">
                    {reviews.map((review, idx) => (
                        <li key={idx} className="p-4 border rounded-xl bg-white shadow">
                            <div className="flex items-center justify-between mb-1">
                                <span className="font-medium">{review.userName}</span>
                                <span className="text-yellow-500 text-lg">{"⭐".repeat(review.rating)}</span>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
