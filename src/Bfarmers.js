import React from 'react'
import cauiflower from './cauliflower.png'
import pea from './green-pea.png'
import spinach from './spinach.png'
import broccoli from './broccoli.png'





const Bfarmers = () => {

   

   
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
       <h3>COOL SEASON CROPS</h3>
       

       </center>
       <center style={{"color":"blue"}} >
      
       These crops prefer cooler temperatures ranging from 7°C to 19°C.
       
       They are usually planted in late spring or early summer after the danger of frost has passed.
     
       
       </center><br/>
       <div className="container" >
        <div className="row">


       <div className='col-md-3 mt-3'>

       <div className="image-container">
        <img src={cauiflower}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
     

      

       </div>
       <div className='col-md-9 mt-3'><b>Cauliflower  </b><br/><br/>

       A rich source of fiber and water, cauliflower helps keep your digestive functions in check, lowering the risk of colon cancer. This flowery green vegetable also maintains your immune system, reducing the risk of inflammation-related conditions like cardiovascular diseases, diabetes, and even obesity. A regular intake of cauliflower provides a healthy dose of important vitamins and minerals like Vitamin B-12, C, and K along with magnesium, phosphorus, potassium, and folate.
       </div>
       </div>
       </div>


       <div className="container" >
        <div className="row">

        <div className='col-md-3 mt-3'>


      


       <div className="imagecontainer"> 
        <img src={spinach}
          
          alt="Placeholder Image"
          className="card-img  pr-5"
          style={zoomImageStyle}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
      </div>

      <div className='col-md-9 mt-3'><b>Spinach   </b><br/><br/>

      From transporting oxygen all over in the body to DNA synthesis, every important life-sustaining activity is carried out by these microscopic red blood cells. Not just that, being a great source of Vitamins A, K, C, B-12, Iron, Folate, Manganese, and Magnesium, spinach also helps maintain the health of your bones. So much so that these leafy greens proudly brag about being the richest in Vitamin K in the vegetable kingdom.
</div>
</div>
</div>



<div className="container" >
        <div className="row">

<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={pea}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Green-Pea  </b><br/><br/>

From an impressive amount of fiber that helps keep your digestive activities in check to blood pressure regulating properties, green peas pack quite the punch of delicious goodness. Despite the common misconception, green peas help to regulate blood sugar levels, making it a good food source for diabetics.
</div>
</div>
</div>




<div className="container" >
        <div className="row">
<div className='col-md-3 mt-3'>

<div className="image-container">
 <img src={broccoli}
   
   alt="Placeholder Image"
   className="card-img  pr-5"
   style={zoomImageStyle}
   onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
   onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
 />
</div>




</div>
<div className='col-md-9 mt-3'><b>Broccoli </b><br/><br/>

Broccoli is rabi crop that n be regarded as a winter hero, flourishing even in cold weather. It is an excellent source of nutrition from the cruciferous vegetable category that adds value to our meals.
</div>
</div>
</div>










       


      
       
       
       
       

       
      
      

       

       

   
    </div>

    
   
  )
}

export default Bfarmers
