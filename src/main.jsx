import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//components
import App from './App.jsx'
//styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
