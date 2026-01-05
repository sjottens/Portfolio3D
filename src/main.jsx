import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

ReactGA.initialize("G-T4QNDV0H95");

// Send pageview with a custom path
ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname, 
  title: "Portfolio3D" 
});

// Initialize GTM with GTM ID
const tagManagerArgs = {
  gtmId: 'GTM-WRSML5N2',
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
