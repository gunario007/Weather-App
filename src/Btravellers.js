import React from 'react'
import tomato from './tomato.png'
import chilli from './chili.png'
import corn from './corn.png'
import cucumber from './cucumber.png'

import mountain from './mountain.png'
import wildlife from './zoological.png'
import lakes from './pond.png'
import road from './road.png'




const Btravellers = () => {

   

   
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
       <h3>COOL SEASON PLACES</h3>
       

       </center>
       <center style={{"color":"blue"}} >
      
       Seasonal travel refers to the practice of planning trips and vacations based on specific times of the year, taking into account factors such as weather, climate, natural phenomena, cultural events, and outdoor activities.
       
       </center><br/>
       <div className="container" >
        <div className="row">


       <div className='col-md-3 mt-3'>

       <div className="image-container">
        <img src={mountain}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
     

      

       </div>
       <div className='col-md-9 mt-3'><b>Mountain Regions </b><br/><br/>

       A mountain region refers to an area characterized by elevated terrain, rugged landscapes, and high peaks that form part of a mountain range or chain. Mountain regions are found on every continent and are known for their natural beauty, biodiversity, and unique ecosystems. 
       </div>
       </div>
       </div>


       <div className="container" >
        <div className="row">

        <div className='col-md-3 mt-3'>


      


       <div className="imagecontainer"> 
        <img src={wildlife}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
      </div>

      <div className='col-md-9 mt-3'><b>Wildlife Park  </b><br/><br/>

      A wildlife park, also known as a safari park or wildlife sanctuary, is a protected area where wild animals are kept and cared for in a natural environment that closely resembles their natural habitat. Wildlife parks offer visitors the opportunity to observe and learn about a variety of animal species up close while supporting conservation efforts and promoting environmental education. 
</div>
</div>
</div>



<div className="container" >
        <div className="row">

<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={lakes}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Lakes </b><br/><br/>

Lakes are large bodies of freshwater or saline water that are surrounded by land and are larger than ponds. They are natural or artificial features found all over the world and play important roles in ecosystems, human activities, and the environment.
Lakes form through various geological processes such as glaciation, tectonic activity, volcanic activity, erosion, and human activities like damming. Glacial lakes, for example, are created by the retreat of glaciers, while volcanic lakes form in volcanic craters or calderas.

</div>
</div>
</div>




<div className="container" >
        <div className="row">
<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={road}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Long Roads </b><br/><br/>

Long road travel refers to journeys that involve covering significant distances by road, often spanning multiple cities, regions, or countries. These journeys can be undertaken for various reasons, including vacations, road trips, business travel, relocation, and exploration.
</div>
</div>
</div>










       


      
       
       
       
       

       
      
      

       

       

   
    </div>

    
   
  )
}

export default Btravellers
