import { Outlet } from "react-router-dom";

const  App = ()  => {
  return (
    <div className="button" >
      <header>
        <h1>The Mane Wolf Hair Salon</h1>
        <nav>
        <a href="/">Home</a> |
         <a href="/staff">Staff</a> | 
        <a href="/services">Services</a> | 
        <a href="/booking">Booking</a> |
         <a href="/admin">Admin</a>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}


export default App;
