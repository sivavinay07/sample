import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NumberShowdown from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NumberShowdown />
  </StrictMode>,
)
