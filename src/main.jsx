import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import cartStore from './redux/cartStore.js'


createRoot(document.getElementById('root')).render(
<Provider store={cartStore}>
    <StrictMode>
     <BrowserRouter> <App /> </BrowserRouter>
    </StrictMode>,
</Provider>
)
