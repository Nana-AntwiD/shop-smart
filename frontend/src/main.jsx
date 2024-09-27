import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './components/ShopContext.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
      <App />
  </ShopContextProvider>
  </BrowserRouter>
    
  
)
