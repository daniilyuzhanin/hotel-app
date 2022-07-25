import { HotelPage } from 'pages/HotelPage';
import { SignInPage } from 'pages/SignInPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/productPage" element={<HotelPage />} />
    </Routes>
  </BrowserRouter>
);
