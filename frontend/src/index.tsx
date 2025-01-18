import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // App.tsx が存在することを確認
import './index.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

reportWebVitals()
