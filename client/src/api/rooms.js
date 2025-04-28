import axios from 'axios';

// Function to fetch rooms from backend
export const fetchRooms = async () => {
  const res = await axios.get('/api/rooms');
  return res.data;
};
