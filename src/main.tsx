import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SatelliteProvider } from './store/satelliteContext.tsx'

createRoot(document.getElementById('root')!).render(
  <SatelliteProvider>
    <App />
  </SatelliteProvider>,
)
