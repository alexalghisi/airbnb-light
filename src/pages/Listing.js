import { useParams } from 'react-router-dom';
import fakeListings from 'data/fakeListings'; // we’ll create this next

export default function Listing() {
    const { id } = useParams();
    const listing = fakeListings.find(item => item.id === parseInt(id));

    if (!listing) return <h2>Listing not found</h2>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{listing.title}</h1>
            <p>{listing.location}</p>
            <p>💰 ${listing.price} / night</p>
            <img
                src={listing.image}
                alt={listing.title}
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
            />
        </div>
    );
}
