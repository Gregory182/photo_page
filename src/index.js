import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter basename='photo_page'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
