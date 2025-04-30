import ListingCard from 'components/ListingCard';
import { Link } from 'react-router-dom';
import fakeListings from 'data/fakeListings'; // we’ll create this next


import 'styles/home.css';


export default function Home() {
    return (
        <div className="home">
            <header className="hero">
                <h1>Welcome to Airbnb-Light</h1>
                <input type="text" placeholder="Search destinations..." />
            </header>

            <section className="listings">
                {fakeListings.map(listing => (
                    <Link
                        key={listing.id}
                        to={`/listing/${listing.id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <ListingCard
                            title={listing.title}
                            location={listing.location}
                            price={listing.price}
                            image={listing.image}
                        />
                    </Link>
                ))}
            </section>

        </div>
    );
}
