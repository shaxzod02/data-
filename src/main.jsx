
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Staff from './pages/Staff.jsx'
import Booking from './pages/Booking.jsx'
import Admin from './pages/Admin.jsx'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Router>
    <Routes>
     <Route path='/' element={<App/>}>
     <Route index element={<Home/>}/>
     <Route path='services' element={<Services/>}/>
     <Route path='staff' element={<Staff/>}/>
     <Route path='booking' element={<Booking/>}/>
     <Route path='admin' element={<Admin/>}/>  
     </Route>
    </Routes>
  </Router>
  
)
