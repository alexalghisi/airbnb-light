import ListingCard from 'components/ListingCard';
import 'styles/home.css';


const fakeListings = [
    {
        id: 1,
        title: 'Cozy Cabin in the Woods',
        location: 'Colorado, USA',
        price: 120,
        image: 'https://source.unsplash.com/400x300/?cabin',
    },
    {
        id: 2,
        title: 'Beach House Escape',
        location: 'Malibu, USA',
        price: 200,
        image: 'https://source.unsplash.com/400x300/?beach-house',
    },
    {
        id: 3,
        title: 'Modern Apartment',
        location: 'New York, USA',
        price: 150,
        image: 'https://source.unsplash.com/400x300/?apartment',
    },
];

export default function Home() {
    return (
        <div className="home">
            <header className="hero">
                <h1>Welcome to Airbnb-Light</h1>
                <input type="text" placeholder="Search destinations..." />
            </header>

            <section className="listings">
                {fakeListings.map(listing => (
                    <ListingCard
                        key={listing.id}
                        title={listing.title}
                        location={listing.location}
                        price={listing.price}
                        image={listing.image}
                    />
                ))}
            </section>
        </div>
    );
}
