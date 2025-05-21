import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from "./context/CartProvider";
import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
        <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
