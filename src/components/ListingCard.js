import React from "react";

const ListingCard = ({ data }) => {
    if (!data) return null;

    return (
        <div className="p-4 border rounded-xl shadow hover:shadow-lg transition cursor-pointer bg-white">
            {data.imageUrl && (
                <img
                    src={data.imageUrl}
                    alt={data.title}
                    className="w-full h-48 object-cover rounded-md mb-3"
                />
            )}
            <h2 className="text-xl font-semibold">{data.title}</h2>
            <p className="text-gray-600">{data.location}</p>
            <p className="text-green-600 font-medium mt-2">${data.price} / night</p>
        </div>
    );
};

export default ListingCard;
