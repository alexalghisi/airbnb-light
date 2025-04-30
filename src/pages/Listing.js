import { useParams } from 'react-router-dom';

export default function Listing() {
    const { id } = useParams();
    return <h1>🏡 Listing {id}</h1>;
}
