import React, {useEffect} from 'react'
import '../morecomponents/RatingButtons.css'
import HotelCards from './HotelCards'
import AOS from 'aos'
import 'aos/dist/aos.css';

function RatingButtons({menuItems, filterItems, setItems}) {
    useEffect(()=>
  {
    AOS.init({duration:1000});
  },[]);
  return (
    <div className='ratingBtns' data-aos="fade-right">
        <button className='btn' onClick={() => setItems(HotelCards)}>
            All Hotels
        </button>
        {
            menuItems.map(val =>(
                <button className='btn' onClick={() => filterItems(val)}>
                    {val}
                </button>
            ))
        }
        
    </div>
  )
}

export default RatingButtons