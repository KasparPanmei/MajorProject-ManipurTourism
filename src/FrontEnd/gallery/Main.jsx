import React, {useEffect, useState} from 'react'
import './Main.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Images from '../../images/Images.jsx'

import CloseIcon from '@mui/icons-material/Close';



function Main() {
  useEffect(()=>
    {
      AOS.init({duration:1000});
    },[]); 
  const images = [
    {
      img: Images.bishnupurheritage,
    },
    {
      img: Images.bishnupurheritage2,
    },
    {
      img: Images.bishnupurheritage3,
    },
    {
      img: Images.bishnupurheritage4,
    },
    {
      img: Images.bishnupurheritage5,
    },
    {
      img: Images.bishnupurlakeswaterfall,
    },
    {
      img: Images.bishnupurlakeswaterfall2,
    },
    {
      img: Images.bunningmeadow,
    },
    {
      img: Images.chandelparkgarden,
    },
    {
      img: Images.churchandpuradventure,
    },
    {
      img: Images.classicgrande,
    },
    {
      img: Images.delhiairport,
    },
    {
      img: Images.imphalEastparkgarden,
    },
    {
      img: Images.imphalheritage,
    },
    {
      img: Images.imphalwestheritage,
    },
    {
      img: Images.imphalwestheritage4,
    },
    {
      img: Images.imphalheritage3,
    },
    {
      img: Images.jiriparkgarden,
    },
    {
      img: Images.kakchinggarden,
    },
    {
      img: Images.kamjongadventure,
    },
    {
      img: Images.keibullamjao,
    },
    {
      img: Images.loktakfirstimg,
    },
    {
      img: Images.manipurZoo,
    },
    {
      img: Images.sangaiWildlife,
    },
    {
      img: Images.senapaticamping,
    },
    {
      img: Images.senapatiheritage,
    },
    {
      img: Images.senapatinature,
    },
    {
      img: Images.thoubalheritage,
    },
    {
      img: Images.tmllakeswaterfall,
    },
    {
      img: Images.tmllakeswaterfall2,
    },
  ]

  const [model, setModel] = useState();
  const [tempSrc, setTempSrc] = useState();

  const getImg = (img) =>{
    setTempSrc(img);
    setModel(true);
  }
  return (
    <div className='Gallery'>
      <div className="Greetings-content">
        <h3 style={{color : 'black', textAlign: 'center', marginBottom:'20px'}}>Our<span> Gallery</span></h3>
        <div className={model? 'model open' : 'model'}>
          <img src={tempSrc} alt="" />
          <CloseIcon
            onClick={() => setModel(false)}
          />
        </div>
        <div className="Images-content" data-aos='zoom-in'>
        {images.map((imagescontents, index) =>
        (
          <div key={index} className="imagescontents">
            <div className="image" onClick={() => getImg(imagescontents.img)}>
              <img src={imagescontents.img} alt="" />
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Main