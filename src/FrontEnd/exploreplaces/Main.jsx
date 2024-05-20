import React, {useEffect, useState} from 'react'
import Images from '../../images/Images.jsx'
import AOS from 'aos'
import "aos/dist/aos.css" 
import './Main.css'
import '../../HomePage.css'
function Main() {
  useEffect(()=>
  {
    AOS.init({duration:1000});
  },[]); 

  const seasonpick =
  [
    {
      img:Images.senapaticamping,
      desc:"Dzukou Valley",
    },
    {
      img:Images.tmlnature4,
      desc:"Tharon Cave",
    },
    {
      img:Images.uklcamping,
      desc:"Phangrei",
    },
    {
      img:Images.tmllakeswaterfall,
      desc:"Barak River",
    },
  ]


  const [toggleState, setToggleState] = useState(1);

  const toggletab =(index) =>
    {
      setToggleState(index);
    }


  const ExploreManipur =
  [
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Loktak Lake",
      desc:"Lokatak Lake is a freshwater lake in the northeast India. It is the largest freshwater lake in South Asia. The lake is located at Moirang in Manipur state India. It is Pulsating lake, with surface..."
    },
    {
      img: Images.imphalwestheritage2,
      title: "Kangla Fort",
      desc:"The Kangla Fort, is an old fortified palace at Imphal in the Manipur state of India. It is formerely situated on both side (western and eastern)of the bank of the Imphal River, now remain only..."
    },
    {
      img: Images.tmlnature3,
      title: "Zeilad Lake",
      desc:"Zelaid Lake is a picturesque freshwater lake located in the Tamenglong district of Manipur, India. The lake is also home for various floras and fauna, including several endamic fish species, migratory bird..."
    },
    {
      img: Images.tmlnature4,
      title: "Tharon Cave",
      desc:"Tharon Cave was once used as the shelter for thousands of years. It is located at the distance of approx 27 Km form Tamenglong. It is a 655.6m long cave with five exists and 34 joints..."
    },
    {
      img: Images.bishnupurlakeswaterfall2,
      title: "Sadu Chiru",
      desc:"Sadu Chiru Waterfalls, also known as Leimaram Waterfall, is a captivating natural attraction located near the village of Ichum Keirap in the Senapati district of Manipur, India..."
    },
    {
      img: Images.imphalwestheritage5,
      title: "Shaheed Minar",
      desc:"Shaheed Minar is a monument located in the heart of Imphal, Manipur, India. It is also known as the Martyr’s Gate ans stands at a height of 26 feet inside the Bir Tikendrajit Park. The Monument was bu ..."
    },
    {
      img: Images.sangaiWildlife,
      title: "Keibul Lamjao National Park",
      desc:"The park is located in the south western part of the Loktak lake. This is the last natural habitat of the brown-antlered deer(Sangai) the dancing deer of Manipur.  It is the only floating park in the World... "                       
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Shirui Kashong",
      desc:"Being one of the popular tourist attraction in ukhrul Shirui kashong peak is famous for teo thing- the Shirui lilies growing in this place and the river flow- ing across Ukhrul. After ..."
    },
    {
      img: Images.tmllakeswaterfall,
      title: "Barak River",
      desc:"Located within the still largely unexplored forest territory of Tamenglong in the district going by same name, the spectacular Barak waterfalls is literally a feast for the eyes. With indigenous  ..."
    },
    {
      img: Images.bunningmeadow,
      title: "Burning Meadow",
      desc:"Being a paradise for nature lovers, the buning Meadow is a place coloured with beautiful lilies and orchids all over making the place even more beautiful. Visiting the place tourists can witness how..."
    },
    {
      img: Images.imphalheritage3,
      title: "War Cemetary",
      desc:"The War Cemeteries in Imphal commemorates the memories of the British and Indian soldiers who died during the World War II. These War Cemeteries are managed by the Commonwealth War Graves ..."
    },
    {
      img: Images.imphalwestheritage3,
      title: "Manipur State Museum",
      desc:"The Manipur State Museum is an institution displaying a collection of artistic, cultural, historical and scientific artefacts and relics in Imphal, Manipur, India. It has galleries housing materials of ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Manipur Zoological Garden",
      desc:"Manipur Zoological Garden is a zoo in Iroisemba, Manipur. It is a medium sized zoological garden. It houses Schedule 1 species of amphibians, birds, mammals and reptiles. The animals kept in ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Santhei Natural Park",
      desc:"Santhei Natural Park is a popular tourist destination located in Andro village of Manipur. The park is an outcome of the villages’ zeal for the conservation of nature and its rational utilization. It is situated on ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "INA War Museum",
      desc:"The INA War Museum or the Indian National Army War Museum  is a WWWII museum in Moirang, Manipur. It is the only official WWII museum in Manipur though many other WWII muse um ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Langol Peak Garden",
      desc:"About 60 kms drive from the heart of Imphal city along the Indo-Myanmar road, surrounded by beautiful landscape, hillocks and breathe taking sceneries, Tlanglhungbung Leikol or Langol P ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Khuga Dam",
      desc:"Khuga Dam impounds the Khuga River south of Churachandpur town ( Manipur ), India. The multipurpose project supplies electricity and water. It is one of the best outdoor picnic spot in Manipur  ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Ngaloi Fall",
      desc:"The exquisiteness and calmness of the waterfalls is something which no one really wishes to miss out! Also esteemed as Ngaloimoul, the Ngaloi village in Churachandpur district, some 70 km south ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Khongjom War Memorial",
      desc:"The Khongjom War Memorial is located in the Kheba Ching at Khongjom, Thoubal District of Manipur. The Khongjom is the name of the area where the battle took place. The kheba Ching is the area where ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Nupi Lal",
      desc:"The Nupi Lal complex is a tribute to the courageous Manipuri women, who sacrificed their lives fighting for justice against the British on 12th December, 1939..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Ima Market",
      desc:"Located in the capital city of Manipur, Imphal, Ima Keithel is a more than 500-year-old market that is run and managed entirely by as many as 5000 women, making it the largest and one-of-a-kind all ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Ningshingkhul Biodiversity",
      desc:"This place is perfect source of biodiversity consisting of aquatic as well as terrestrial plants and animals. There is also Ancestral Heroes Complex there where we can pay homage..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Kakching Garden",
      desc:"Kakching Garden is situated at Uyok Ching, in the south of Kakching Bazaar. It is one of the most highly rated gardens in Manipur.A fishery farm is located in the northern hills of Kakching near the Kakchi ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Willong Khullen",
      desc:"Willong Khullen is a small village in the  remote corner of Manipur. It is known for megalithic huge stone structures erected probably during stone age. There is absolutely no information about the historical ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Tonglon Cave",
      desc:"Tonglon Cave is a popular tourist attraction located in Churachandpur district, Manipur. It is regarded as one of the best cultural and historical highlights of the town. The cave is often referred to as “Eternal Hap ..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Naamai Zho",
      desc:"Naamai Zho is one of the most beautiful tourism place of Manipur. It is located at the river bank of Barak River. Around 5-6 km away from NH-1..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title:"Phangrei",
      desc:"A popular picnic spot of the locals and also frequented by tourists, Phangrei is one of the picturesque tourist spot in Ukhrul. Phangrei also joints the Shirui Hills.  It is about 22 kms from Ukhrul..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "The Tilily/Tiluelue waterfalls",
      desc:"The Tilily waterfalls are also known as Khayang Waterfalls. They are located in the Ukhrul district of Manipur, which is located on the state's eastern border with Myanmar. The Khayang-Phungtha villages are home to the state's highest waterfall..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Wuya Kachui",
      desc:"Wuyawon flower is grown on the hilly slopes of Mount Wuya Kachui. The blooming season of the flower is in the month of July and it covered the entire hillock of Mount Wuya Kachui located under the jurisdiction of Kamjong District, Shingcha Village..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Huishu Village",
      desc:"Huishu village is about 55 kilometres away from Ukhrul town and the tourist place (river bank and valley) is surrounded by beautiful greenery mountain peaks and is very refreshing for stay at river bank..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Yangkhullen Village",
      desc:"Yangkhullen also known as the Hanging Village of Manipur is 80 km from the Senapati district of Manipur. It is a unique and remote village nestled on a steep mountainside. The village offers a glimpse into the traditional way of life of the tribe..."
    },
    {
      img: Images.bishnupurlakeswaterfall,
      title: "Ramrei Eco-Tourism Park",
      desc:"It's one of the best place to hangout with friends and families during holidays. Do visit to enjoy the scenic landscape and the mesmerizing water expanse view. Located in Ukhrul Dist 30 Km from Imphal... "
    },
  ]

  const [noOfElement, setnoOfElement] = useState(6);
  const loadmore = () =>
    {
      setnoOfElement(noOfElement + noOfElement)
    }
  
  const slice = ExploreManipur.slice(0, noOfElement);


  const Districts =[
    {
      img:Images.ukhruladventure,
      title: "Ukhrul",
      desc: "Ukhrul District is located in the north of the Manipur State and it is a hill district of the state with full of scenic beauty. District is home of colourful Tangkhul people and Tangkhuls are the dominant tribe..."
    },
    {
      img:Images.ukhruladventure,
      title: "Tamenglong",
      desc: "Tamenglong District is bounded by Senapati District to the East, North Cashar Hills District of Assam to the West, Peren District Of Nagaland to the North and Churachanpur of Manipur to the south..."
    },
    {
      img:Images.ukhruladventure,
      title: "Senapati",
      desc: "Senapati District is located in the northern part of Manipur. It is bounded on the east by Ukhrul District, on the west by Tamenglong, on the north by Phek District of Nagaland and on the south by Imphal East and Imphal West..."
    },
    {
      img:Images.ukhruladventure,
      title: "Kamjong",
      desc: "Kamjong District is located in the north of the Manipur State and it is a hill district of the state with full of scenic beauty. District is home of colourful Tangkhul people and Tankhuls are the dominant tribe..."
    },
    {
      img:Images.ukhruladventure,
      title: "Chandel",
      desc: "Chandel District lies in the south-eastern part of Manipur, Myanmar on the south and east, Ukhrul on the north, Churachandpur on the south and west, and Thoubal on the north. It is about 64 km. away from Imphal..."
    },
    {
      img:Images.ukhruladventure,
      title: "Tengnoupal",
      desc: "Tengnoupal district headquarters is located in Tengnoupal village.The Sub-divisions : Moreh, Machi and Tengnoupal are under Tengnoupal District.The district is home to about 59 thousand people..."
    },
    {
      img:Images.ukhruladventure,
      title: "Noney",
      desc: "Noney District headquarters is 63 km west of Imphal. The district is bounded by Tamenglong on the north, Bishnupur and Kangpokpi on the east, Jiribam on the west, and Churachandpur and Pherzawl on the south... "
    },
  ]

  const [noOfDistricts, setnoOfDistricts] = useState(6);
  const districtsloadmore = () =>
    {
      setnoOfDistricts(noOfDistricts + noOfDistricts)
    }
  
  const cutDistricts = Districts.slice(0, noOfDistricts);



  const whyexplore =[
    {
      title:"Local Expertise",
      desc:"Our guides are locals who breathe life into the places they guide you through.",
    },
    {
      title:"Tailored Experiences",
      desc:"From solo adventurers to group explorations, we tailor each experience to your interests, ensuring a personalized journey that resonates with you.",
    },
    {
      title:"Seamless Navigation",
      desc:"Forget the stress of navigating unknown territories. Our guides are your reliable companions, seamlessly leading you through bustling markets, historical landmarks, and off-the-beaten-path wonders with confidence.",
    },
    {
      title:"Cultural Immersion",
      desc:"Immerse yourself in the heart of local cultures. Our guides facilitate meaningful interactions, language insights, and introductions to traditions, providing a genuine connection to the places you visit.",
    },
    {
      title:"Insider Access",
      desc:"Gain exclusive access to hidden spots and local favorites that only seasoned guides can reveal. Experience destinations like a true insider, away from the typical tourist routes.",
    },
    {
      title:"Safety Assurance",
      desc:"Your safety and comfort are our top priorities. Our guides are trained to handle diverse situations, ensuring you can focus on enjoying the journey while we take care of the details.",
    }
  ]

  return (
    <div className='ExplorePlaces'>
      <div className="herocontainer" data-aos="fade-right">
        <img src={Images.exploreplacehero} alt="exploreplaceheroimage" />
      </div>
      <div className="aboutmanipurcontainer" data-aos="zoom-in">
        <div className="contents">
          <div className="heading">
            <h3>About Manipur</h3>
            <p>
                The state of Manipur also known as  "The Jewel of India" especially to the colorful diversity of blossoms is  a northeastern state in India, renowned for its verdant landscapes, rich cultural heritage, and diverse wildlife. 
                It is bordered by Nagaland to the north, Mizoram to the south, Assam to the west, and shares an international border with Myanmar to the east. The state covers an area of 22,347 square kilometers and hosts a variety of ethnic groups, each with distinct traditions and languages. The capital city, Imphal, is the epicenter of the state's political and cultural activities. Manipur's geography is characterized by the hill ranges radiating from a central valley where the majority of the population resides. Loktak Lake, the largest freshwater lake in the northeast, is also located in Manipur, which is famous for the unique 'phumdis' or floating islands.
            </p>
            <button type="button" className='btn'>Learn More</button>
          </div>
        </div>
        <div className="s-contents">
          <div className="heading">
            <h3>Manipur Info</h3>
            <div className="manipurinfocontainer">
              <div className="f-cols">
                <p>Currency:</p>
                <p>Population:</p>
                <p>Time Zone:</p>
                <p>Area:</p>
                <p>Capital:</p>
                <p>Official Language:</p>
              </div>
              <div className="s-cols">
                <p>Indian Rupee</p>
                <p>28.56 Lakhs</p>
                <p>GMT + 05:30 hours</p>
                <p>22,327 sqr km</p>
                <p>Imphal</p>
                <p>None</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* season pick */}
      <div className="heading" data-aos="zoom-in">
        <h3>Season Pick <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      <div className="seasonpickcontainer" data-aos="zoom-in">
        {seasonpick.map((seasoncontents,index) =>
      (
        <div key={index} className='seasoncontents'>
          <div className="img">
            <img src={seasoncontents.img} alt=""/>
          </div>
          <p>{seasoncontents.desc}</p>
        </div>
      ))}
      </div>
      <div className="heading" data-aos="zoom-in">
        <h3>Explore by Interest <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      <div className="explorebyinterest" data-aos='zoom-in'>
        <div className="block-tabs">
          <div className={toggleState === 1? "tabs active-tabs": "tabs"} onClick={() => toggletab(1)}>
            <button class='ta'>Wildlife</button>
          </div>
          <div className={toggleState === 2? "tabs active-tabs": "tabs"} 
          onClick={() => toggletab(2)}>
            <button class='ta'>Lakes & Waterfall</button>
          </div>
          <div className={toggleState === 3? "tabs active-tabs": "tabs"}
           onClick={() => toggletab(3)}>
            <button class='ta'>Nature</button>
          </div>
          <div className={toggleState === 4? "tabs active-tabs": "tabs"}
           onClick={() => toggletab(4)}>
            <button class='ta'>Heritage</button>
          </div>
          <div className={toggleState === 5? "tabs active-tabs": "tabs"}
           onClick={() => toggletab(5)}>
            <button class='ta'>Camping & Outdoor</button>
          </div>
          <div className={toggleState === 6? "tabs active-tabs": "tabs"}
           onClick={() => toggletab(6)}>
            <button class='ta'>Adventure</button>
          </div>
          <div className={toggleState === 7? "tabs active-tabs": "tabs"}
           onClick={() => toggletab(7)}>
            <button class='ta'>Park & Garden</button>
          </div>
        </div>

        <div className="tabs-contents" data-aos='zoom-in'>
          <div className={toggleState ===1? "active-content" : "block-contents "}>
           <div className="images">
            <div className="image">
              <img src={Images.sangaiWildlife} alt="" />
            </div>
            <div className="image">
              <img src={Images.manipurZoo} alt="" />
            </div>
            <div className="image">
              <img src={Images.ukhrulwildlife} alt="" />
            </div>
           </div>
          </div>
          <div className={toggleState ===2? "active-content" : "block-contents "}>
           <div className="images">
            <div className="image">
              <img src={Images.bishnupurlakeswaterfall} alt="" />
            </div>
            <div className="image">
              <img src={Images.churchandpurlakeswaterfall} alt="" />
            </div>
            <div className="image">
              <img src={Images.ukhrullakeswaterfall} alt="" />
            </div>
            <div className="image">
              <img src={Images.tmllakeswaterfall} alt="" />
            </div>
           </div>
          </div>
          <div className={toggleState ===3? "active-content" : "block-contents "}>
           <div className="images">
            <div className="image">
              <img src={Images.kakchingnature} alt="" />
            </div>
            <div className="image">
              <img src={Images.senapatinature} alt="" />
            </div>
            <div className="image">
              <img src={Images.tmlnature} alt="" />
            </div>
            <div className="image">
              <img src={Images.tmlnature3} alt="" />
            </div>
           </div>
          </div>
          <div className={toggleState ===4? "active-content" : "block-contents "}>
           <div className="images">
            <div className="image">
              <img src={Images.bishnupurheritage} alt="" />
            </div>
            <div className="image">
              <img src={Images.imphalheritage} alt="" />
            </div>
            <div className="image">
              <img src={Images.imphalwestheritage} alt="" />
            </div>
            <div className="image">
              <img src={Images.senapatiheritage} alt="" />
            </div>
           </div>
          </div>
          <div className={toggleState ===5? "active-content" : "block-contents "}>
           <div className="images">
            <div className="image">
              <img src={Images.senapaticamping} alt="" />
            </div>
            <div className="image">
              <img src={Images.uklcamping} alt="" />
            </div>
            <div className="image">
              <img src={Images.uklcamping2} alt="" />
            </div>
            <div className="image">
              <img src={Images.uklcamping3} alt="" />
            </div>
           </div>
          </div>
          <div className={toggleState ===6? "active-content" : "block-contents "}>
           <div className="images">
            <div className="image">
              <img src={Images.kamjongadventure} alt="" />
            </div>
            <div className="image">
              <img src={Images.kamjongadventure2} alt="" />
            </div>
            <div className="image">
              <img src={Images.tmlnature4} alt="" />
            </div>
            <div className="image">
              <img src={Images.ukhrulheritage2} alt="" />
            </div>
           </div>
          </div>
          <div className={toggleState ===7? "active-content" : "block-contents "}>
           <div className="images">
            <div className="image">
              <img src={Images.imphalEastparkgarden} alt="" />
            </div>
            <div className="image">
              <img src={Images.jiriparkgarden} alt="" />
            </div>
            <div className="image">
              <img src={Images.kakchinggarden} alt="" />
            </div>
            <div className="image">
              <img src={Images.chandelparkgarden} alt="" />
            </div>
           </div>
          </div>
        </div>
      </div>
      {/* Explore manipur */}
      <div className="heading" data-aos="zoom-in">
        <h3>Explore Manipur <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      <div className="ExploreManipur">
        <div className="destinations">
          {slice.map((destinationContents, index) =>
          (
            <a href={ExploreManipur.desc}>
              <div key={index} className="destinationContents">
                <div className="images">
                  <img src={destinationContents.img} alt="" />
                </div>
                <div className="title">
                  <h4>{destinationContents.title}</h4>
                </div>
                <div className="desc">
                  {destinationContents.desc}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="btn" onClick={() => loadmore()}>
          Load More
        </div>
      </div>
      {/* districts in manipur */}
      <div className="heading" data-aos='zoom-in'>
        <h3>Disticts in Manipur <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      <div className="ExploreManipur">
        <div className="destinations">
          {cutDistricts.map((destinationContents, index) =>
          (
            <a href={ExploreManipur.desc}>
              <div key={index} className="destinationContents">
                <div className="images">
                  <img src={destinationContents.img} alt="" />
                </div>
                <div className="title">
                  <h4>{destinationContents.title}</h4>
                </div>
                <div className="desc">
                  {destinationContents.desc}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="btn" onClick={() => districtsloadmore()}>
          Load More
        </div>
      </div>
      {/* why explore */}
      <div className="heading" data-aos="zoom-in">
        <h3>Why you should explore <span className='firstrow'></span> <span className='secondrow'></span></h3>
      </div>
      <div className="WhyChooseOurGuideContent" data-aos='zoom-in'>
      {whyexplore.map((whyourguide, index) =>
            (
              <div key={index} className="whyourguide">
                <div className="title">
                  <h3>{whyourguide.title}</h3>
                  <p>{whyourguide.desc}</p>
                </div>
              </div>
            ))}
      </div>

    </div>
  )
}

export default Main