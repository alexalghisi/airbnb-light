import ListingCard from 'components/ListingCard';
import 'styles/home.css';


const fakeListings = [
    {
        id: 1,
        title: 'Cozy Cabin in the Woods',
        location: 'Colorado, USA',
        price: 120,
        image: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',  // working
    },
    {
        id: 2,
        title: 'Beach House Escape',
        location: 'Malibu, USA',
        price: 200,
        image: 'https://roohome.com/wp-content/uploads/2017/02/Konstantin-Entalecev-cover.jpg',  // working
    },
    {
        id: 3,
        title: 'Modern Apartment',
        location: 'New York, USA',
        price: 150,
        image: ' https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg',  // working
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
