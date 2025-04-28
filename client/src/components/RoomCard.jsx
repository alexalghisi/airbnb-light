import React from 'react';

// Card component to display a room
const RoomCard = ({ room }) => (
  <div className="rounded-xl shadow p-4">
    <img src={room.image} alt={room.title} className="rounded w-full h-48 object-cover" />
    <h3 className="text-xl font-bold mt-2">{room.title}</h3>
    <p>{room.location}</p>
    <p className="font-semibold">${room.price}/night</p>
  </div>
);

export default RoomCard;
