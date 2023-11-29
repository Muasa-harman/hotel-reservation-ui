import React, { useState } from 'react'
import './hotel.scss'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


function Hotel() {
  const [slideNumber,setSlideNumber] = useState(0)
  const [open,setOpen] = useState(false)
  const photos = [
    {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/485547971.jpg?k=ad3e03f2c61aacfac5b1107d522a4a0f6497b700f579005d02d28c8fecc553ea&o=&hp=1"},
  
    {src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e3/43/e1/presidential-suite-villa.jpg?w=700&h=-1&s=1"},
  
    {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/485548015.jpg?k=0e774ceaba7e6c85a0fab4385d0a066a4b89a657c827cc00a8da526903ec071c&o=&hp=1"},
  
    {src:"https://www.kempinski.com/var/site/storage/images/0/0/1/2/202100-1-eng-GB/4d50d0e4b6bd-73657583_4K.jpg"},
  
    {src:"https://www.kempinski.com/var/site/storage/images/0/9/2/1/201290-1-eng-GB/66ff95a1a1e9-73657597_4K.jpg"},
  
    {src:"https://y.cdrst.com/foto/hotel-sf/393b1/granderesp/villa-rosa-kempinski-general-cae3181.jpg"}
  ];
const handleOpen = (i) =>{
  setSlideNumber(slideNumber)
  setOpen(true)
}

const handleMove = (direction) =>{
  let newSlideNumber;

  if(direction === 'l'){
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
  } else{
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
  }
  setSlideNumber(newSlideNumber)
}
  return (
    <div className='hotel'>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setOpen(false)} className='close'/>
          <div className="sliderWrapper">
          <FontAwesomeIcon onClick={()=>handleMove("l")} icon={faCircleArrowLeft} className='arrow'/>
            <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
          <FontAwesomeIcon onClick={()=>handleMove("r")} icon={faCircleArrowRight} className='arrow'/>
          </div>
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">kempinski Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Westland st 161 Waiyaki way </span>
          </div>
            <span className="hotelDistance">Excellent location - 500m from CBD </span>
            <span className="hotelPriceHighlight">Book a stay over $200 at this property and get a free airport taxi </span>
            <div className="hotelImages">
              {photos.map((photo, i) =>(<div className='hotelImgWrapper'>
                <img onClick={()=>handleOpen(i)} src={photo.src} alt='' className='hotelImg'/>
              </div>))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of Nairobi</h1>
                <p className="hotelDesc">Explore the city in style and comfort by staying at the best luxury 5* hotel in Nairobi.
                 Enjoy up to 20% off and experience the very best of Nairobi at our 5-star hotel. Onsite shops. Private Transfers.
                 Fast Online Booking. Valet Parking. + 10% off for Members. Free Wi-Fi.
                 </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>Located in the real heart of Nairobi, this property has an excellent location score of 9.8!</span>
                <h2><b>$945</b>(9 nights)</h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel