import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/styles/navbar.css'
import './assets/styles/tarjetaConciertos.css'
import './assets/styles/socialButtons.css'
import  './assets/styles/player.css'
import './assets/styles/section.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
