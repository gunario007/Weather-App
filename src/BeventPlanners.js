import React from 'react'
import tomato from './tomato.png'
import chilli from './chili.png'
import corn from './corn.png'
import cucumber from './cucumber.png'

import fishing from './fishermen.png'
import sun from './sunset.png'
import trekking from './hiking.png'
import boat from './boat.png'




const BeventPlanners = () => {

   

   
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
       <h3>COOL SEASON EVENTS</h3>
       

       </center>
       <center style={{"color":"blue"}} >
      
       Event planning involves careful consideration of the goals, audience, logistics, budget, and overall experience desired for each unique event.
       
       </center><br/>
       <div className="container" >
        <div className="row">


       <div className='col-md-3 mt-3'>

       <div className="image-container">
        <img src={fishing}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
     

      

       </div>
       <div className='col-md-9 mt-3'><b>Fishing  </b><br/><br/>

       Fishing is a popular outdoor activity and recreational pastime enjoyed by millions of people around the world. It involves catching fish from rivers, lakes, oceans, and other bodies of water using various techniques and equipment.
       </div>
       </div>
       </div>


       <div className="container" >
        <div className="row">

        <div className='col-md-3 mt-3'>


      


       <div className="imagecontainer"> 
        <img src={sun}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
      </div>

      <div className='col-md-9 mt-3'><b>Sunrise & Sunrise   </b><br/><br/>

      Sunset and sunrise are natural phenomena that occur daily as a result of the Earth's rotation and its position relative to the Sun.
      Sunset is the daily event when the Sun disappears below the horizon, marking the end of daylight and the beginning of twilight.
      Sunset is a popular time for photography, as the soft, warm light creates dramatic and beautiful landscapes.
      Sunrise is the daily event when the Sun appears above the horizon, signaling the start of daylight and the end of twilight.
      Sunrise symbolizes renewal, hope, and the beginning of a new day. Many cultures and traditions attach spiritual and symbolic significance to sunrise rituals and ceremonies.
</div>
</div>
</div>



<div className="container" >
        <div className="row">

<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={trekking}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Trekking </b><br/><br/>

Trekking, also known as hiking or backpacking, is an outdoor recreational activity that involves walking or hiking over long distances, usually in natural environments such as mountains, forests, deserts, or wilderness areas.
Trekking involves moderate to strenuous physical activity, depending on the difficulty of the terrain, elevation gain, and distance covered. It provides a full-body workout, including cardiovascular exercise, muscle strengthening, and endurance training.
</div>
</div>
</div>




<div className="container" >
        <div className="row">
<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={boat}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Boating </b><br/><br/>

Boating is a popular recreational activity that involves navigating water bodies using boats, ships, or other watercraft. It offers opportunities for relaxation, adventure, exploration, and socializing on rivers, lakes, oceans, and other bodies of water.

</div>
</div>
</div>










       


      
       
       
       
       

       
      
      

       

       

   
    </div>

    
   
  )
}

export default BeventPlanners
