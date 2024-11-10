import axios from 'axios';

const api = axios.create({
   baseURL: 'https://your-backend-url.com/api',
});

export const fetchBookings = async () => {
   const response = await api.get('/bookings');
   return response.data;
};

export const createBooking = async (bookingData) => {
   const response = await api.post('/bookings', bookingData);
   return response.data;
};
