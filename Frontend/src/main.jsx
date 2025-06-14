import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/*enables client side routing throught the app*/}
    <CartProvider>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
    </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
