import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/firebase";

export const fetchListings = async () => {
    const querySnapshot = await getDocs(collection(db, "listings"));
    const listings = [];
    querySnapshot.forEach((doc) => {
        listings.push({ id: doc.id, ...doc.data() });
    });
    return listings;
};
