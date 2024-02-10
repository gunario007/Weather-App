import React from 'react'
import tomato from './tomato.png'
import chilli from './chili.png'
import corn from './corn.png'
import cucumber from './cucumber.png'




const Farmers = () => {



   
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
       <h3>WARM SEASON CROPS</h3>
       

       </center>
       <center style={{"color":"blue"}} >
      
       These crops thrive in warmer temperatures ranging from 20°C to 35°C.
       
       They are usually planted in late spring or early summer after the danger of frost has passed.
     
       
       </center><br/>
       <div className="container" >
        <div className="row">


       <div className='col-md-3 mt-3'>

       <div className="image-container">
        <img src={tomato}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
     

      

       </div>
       <div className='col-md-9 mt-3'><b>Tomatoes  </b><br/><br/>

       Tomatoes are one of the eye-catching vegetables grown in summer in India. These plants love the sunshine and clear sky. The best part is it could be grown around the year. 

Overall, these vegetables of summer require 6-8 hours of sunshine and well-drained and rich soil. They are heavy feeders and require plenty of fertilizers and consistent irrigation
       </div>
       </div>
       </div>


       <div className="container" >
        <div className="row">

        <div className='col-md-3 mt-3'>


      


       <div className="imagecontainer"> 
        <img src={chilli}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
      </div>

      <div className='col-md-9 mt-3'><b>Peppers   </b><br/><br/>

      Pepper is our next candidate in the summer season summer vegetables in India. Pepper thrives in hot weather and is one of the easiest vegetables of summer to grow. 

The brownie point is that pepper can be grown side by side with other vegetables of summer,  like tomatoes and brinjals, because they have similar requirements. All they need is ample sunshine, fertile soil and consistent watering
</div>
</div>
</div>



<div className="container" >
        <div className="row">

<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={corn}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Sweet Corn  </b><br/><br/>

Sweet corn is next in the line of summer fruits and vegetables. It can handle hot and dry weather. The faster it grows, the hotter it gets, and it rewards with delicious crops all season long. 

Corns are one of the fine examples of vegetables of summer that require pollination. Plant corn in 4×4 sq. ft. or multiple rows next to each other to ensure pollination. Apply water diligently in the scorching summer. Corn planted with squash and beans is commonly called “three sisters.”
</div>
</div>
</div>




<div className="container" >
        <div className="row">
<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={cucumber}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>cucumber </b><br/><br/>

Cucumbers are very rejuvenating vegetables of summer that can be directly seeded on the ground. If your soil is warm, seeds could sprout, germinate in nearly three days and take 50 days to mature.

Cucumbers are the only vegetables of summer that produce best when trained onto a fence or a trail. This is because fruits have a better chance of survival when not in direct contact with soil and are less prone to critters and slugs. 
</div>
</div>
</div>










       


      
       
       
       
       

       
      
      

       

       

   
    </div>

    
   
  )
}

export default Farmers
