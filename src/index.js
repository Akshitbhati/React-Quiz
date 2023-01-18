import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './Context/Context'
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <AppProvider>
    <App />
    </AppProvider>
)