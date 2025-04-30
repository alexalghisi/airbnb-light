import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/listing/:id" element={<div>Listing</div>} />
          <Route path="/bookings" element={<div>Bookings</div>} />
        </Routes>
      </Router>
  );
}

export default App;
