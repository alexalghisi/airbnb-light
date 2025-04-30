import 'styles/listingCard.css';

export default function ListingCard({ title, location, price, image }) {
    return (
        <div className="listing-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{location}</p>
            <p>💰 ${price}/night</p>
        </div>
    );
}
