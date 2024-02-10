import React from 'react'
import tomato from './tomato.png'
import chilli from './chili.png'
import corn from './corn.png'
import cucumber from './cucumber.png'

import beach from './summer-holidays.png'
import water from './water-slide.png'
import historical from './historic-site.png'
import market from './cart.png'




const Travellers = () => {

   

   
        const zoomImageStyle = {
          transition: 'transform 0.3s',
        };
      
        const zoomedImageStyle = {
          ...zoomImageStyle,
          transform: 'scale(1.2)',
        };
      
  return (
    
       <div  >

       



       <center style={{"margin-top":"200px"}}>
       <h3>WARM SEASON PLACES</h3>
       

       </center>
       <center style={{"color":"blue"}} >
      
       Seasonal travel refers to the practice of planning trips and vacations based on specific times of the year, taking into account factors such as weather, climate, natural phenomena, cultural events, and outdoor activities.

       
       </center><br/>
       <div className="container" >
        <div className="row">


       <div className='col-md-3 mt-3'>

       <div className="image-container">
        <img src={beach}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
     

      

       </div>
       <div className='col-md-9 mt-3'><b>Beach </b><br/><br/>

       Beaches are natural or artificial landforms consisting of sand, pebbles, rocks, or other materials along the shoreline of oceans, seas, lakes, or rivers. They are popular destinations for recreation, relaxation, and outdoor activities, offering a wide range of experiences for visitors of all ages.

       </div>
       </div>
       </div>


       <div className="container" >
        <div className="row">

        <div className='col-md-3 mt-3'>


      


       <div className="imagecontainer"> 
        <img src={water}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
      </div>

      <div className='col-md-9 mt-3'><b>Water Park   </b><br/><br/>

      Water parks are recreational facilities designed for water-based fun and entertainment. They typically feature a variety of attractions, rides, pools, and slides suitable for visitors of all ages.
      Water slides are a signature feature of water parks, offering thrilling and exhilarating rides for visitors. Slides come in various shapes, sizes, and configurations, including body slides, tube slides, speed slides, and multi-lane racing slides. They often incorporate twists, turns, drops, and special effects to enhance the rider experience.

</div>
</div>
</div>



<div className="container" >
        <div className="row">

<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={historical}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Historical Sites  </b><br/><br/>

Historical sites are places of cultural, architectural, or archaeological significance that provide insights into past civilizations, events, and cultural heritage. They serve as tangible links to history, allowing visitors to explore and learn about the people, events, and traditions that shaped the world we live in today.
</div>
</div>
</div>




<div className="container" >
        <div className="row">
<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={market}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Market shopping </b><br/><br/>

Market shopping refers to the act of purchasing goods and services from markets, which are physical or virtual spaces where vendors sell a variety of products to consumers. Markets can range from traditional open-air markets and bazaars to modern supermarkets, specialty stores, and online marketplaces.
</div>
</div>
</div>










       


      
       
       
       
       

       
      
      

       

       

   
    </div>

    
   
  )
}

export default Travellers
