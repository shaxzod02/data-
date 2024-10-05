

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
    process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB') 
}).catch((error) => {
     console.error('Error connecting to MongoDB:', error)
} )


const BookingSchema = new mongoose.Schema({
 name: {true: String, required: true },
 email: {type: String, required: true },
 date: {type: Date, required: true },
 stylist: {type: String, required: false },
 service: {type: Number, required: true },  
})


const Booking = mongoose.model('Booking2', BookingSchema)

app.get('/api/bookings', async (req, res) => {
try {
  const bookings = await Booking.find({})
  res.json(bookings)
} catch (error) {
  console.error('Error fetching bookings:',error) ;
  res.status(500).json({message: 'Error fetching bookings'})  
}
})

app.post('/api/bookings', async (req, res) => {
    try {
    const {name, email, date, stylist, service } = req.body
    const newBooking = new Booking({ name, email, date, stylist, service })
    await newBooking.save()
    res.status(201).json(newBooking)
    }catch (error){
        console.error('Error saving booking:',error) ;
        res.status(500).json({message: 'Error saving bookings'})   
    }
    })
    

    app.listen(5001, () => {
        console.log('Server is running on port 6000') 
     })
 

