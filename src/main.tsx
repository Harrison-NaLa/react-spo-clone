import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router';
import LoginLayout from './features/auth/login/login-layout/login-layout.tsx';
import { ThemeProvider } from './components/heme-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navigate to="/login" replace={true} />} />
                  <Route path="/home" element={<App />} />
                  <Route path="/login" element={<LoginLayout />} />
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  </StrictMode>
)


