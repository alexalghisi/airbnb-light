import React, { useEffect, useState } from 'react';
import { fetchRooms } from '../api/rooms';
import RoomCard from '../components/RoomCard';

// Home page that lists all rooms
const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms().then(setRooms);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {rooms.map(room => <RoomCard key={room._id} room={room} />)}
    </div>
  );
};

export default Home;
