import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<div>Login page</div>} />
    </Routes>
  </BrowserRouter>
);
