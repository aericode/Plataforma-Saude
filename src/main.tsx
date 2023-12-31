import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeContext from './contexts/ThemeContext';
import { ScreenProvider } from './contexts/ScreenSizeContext/index.tsx';
import { DataProvider } from './contexts/DataContext/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContext>
      <DataProvider>
        <ScreenProvider>
          <App />
        </ScreenProvider>
      </DataProvider>
    </ThemeContext>
  </React.StrictMode>,
)
