import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom' // 1. Changed from BrowserRouter

const updateTheme = () => {
  const savedTheme = localStorage.getItem('user-theme');
  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', theme);
};

updateTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. HashRouter handles your base sub-folder automatically, so remove basename */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
