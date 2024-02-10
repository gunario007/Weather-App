import React from 'react'

import marathon from './finish-line.png'
import swimming from './swimming.png'
import worker from './worker.png'
import sports from './sports.png'



const EventPlanners = () => {

   

   
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
       <h3>WARM SEASON EVENTS</h3>
       

       </center>
       <center style={{"color":"blue"}} >
      
       Event planning involves careful consideration of the goals, audience, logistics, budget, and overall experience desired for each unique event.
     
       
       </center><br/>
       <div className="container" >
        <div className="row">


       <div className='col-md-3 mt-3'>

       <div className="image-container">
        <img src={marathon}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
     

      

       </div>
       <div className='col-md-9 mt-3'><b>Marathons  </b><br/><br/>

       Summer brings a variety of sporting events, including baseball games, soccer matches, tennis tournaments, and golf championships. Whether it's cheering for your favorite team or participating in recreational sports leagues, there are plenty of opportunities to stay active and enjoy the outdoors
       </div>
       </div>
       </div>


       <div className="container" >
        <div className="row">

        <div className='col-md-3 mt-3'>


      


       <div className="imagecontainer"> 
        <img src={swimming}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
      </div>

      <div className='col-md-9 mt-3'><b>Swimming  </b><br/><br/>

      Swimming is a popular water-based activity and sport that offers numerous physical and mental health benefits
      Swimming is an excellent full-body workout that engages multiple muscle groups, including the arms, legs, core, and back. It improves cardiovascular health, muscle strength, endurance, flexibility, and overall physical fitness.
</div>
</div>
</div>



<div className="container" >
        <div className="row">

<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={worker}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Construction  </b><br/><br/>

Construction building, also known simply as construction, refers to the process of erecting structures, buildings, infrastructure, and other physical facilities. It involves a series of steps, techniques, and specialized skills to bring architectural designs from concept to reality.
</div>
</div>
</div>




<div className="container" >
        <div className="row">
<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={sports}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Sports </b><br/><br/>

Summer brings a variety of sporting events, including baseball games, soccer matches, tennis tournaments, and golf championships. Whether it's cheering for your favorite team or participating in recreational sports leagues, there are plenty of opportunities to stay active and enjoy the outdoors.
</div>
</div>
</div>










       


      
       
       
       
       

       
      
      

       

       

   
    </div>

    
   
  )
}

export default EventPlanners
