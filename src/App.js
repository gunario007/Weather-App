import React from 'react'
import axios from 'axios'
import './App.css'
import humidity from './humidity.png'
import pressure from './resilient.png'
import high from './high-temperature.png'
import low from './low-temperature.png'
import wind from './wind.png'
import travel from './immigrant.png'
import eventplanner from './calendar.png'
import farmer from './farmer.png'

import Popup from './Popup'
import './Modal.css'



import { useState } from 'react'
import Cards from './Cards'
import Farmer from './Farmer'


const key="a74e21e2e11290ddc996d96f101cb1c8";




const App = () => {

  const [city,setCity]=useState('');
  const [data,setData]=useState();
  const [error, setError] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [bfarm, setBfarm] = useState(false);
  const [gOpen, setGopen] = useState(false);
  const [bOpen, setBopen] = useState(false);
  const [gTrav, setGtrav] = useState(false);
  const [bTrav, setBtrav] = useState(false);



 
  const gFarm = () => {
    setIsOpen(!isOpen);
  }

  const badFarm=()=>{
    setBfarm(!bfarm);

  }

  const gPlan = () => {
    setGopen(!gOpen);
  }

  const bPlan=()=>{
    setBopen(!bOpen);

  }

  const gTravel = () => {
    setGtrav(!gTrav);
  }

  const bTravel=()=>{
    setBtrav(!bTrav);

  }
  

  

  

  




  const fetchData=async()=>{
    try{
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      setData(response.data);
      setError("");
      console.log(response.data);
    }
    catch(err){
      if(city==""){
        setError("Please enter city name ");
      }
      else{
        setError("please enter the city name correctly");
      }
      
      console.error("Error fetching weather data:", err);
    }
  }


  return (
    <section>
    
    <div className='App'>
    
    
    
      <div className='App' >

    
    
         <h1 className='title'>WEATHER PREDICTER</h1>

           <div className='input-container'>
           <input type="text"
              className='input'
              value={city}
              onChange={e=>setCity(e.target.value)}
              placeholder='enter the city name'
            />
            <button className="buttons" onClick={()=>fetchData()}>Search</button>
        
            </div>
      
          <p style={{ color: "red" }}>{error}</p>
 
      </div>
     

      <div className='col-md-8'>
        {data ? (
          <div className='containers'>
            <h1 className='city-name'>{data.name},{data.sys.country}</h1>
            <div className='weather-info'>
              <div><h3>{Math.round(data.main.temp- 273.15)} °C</h3>  </div> 
              <div><img  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                alt="icon"
                              />{data.weather[0].description}
              </div>
              <div className='coordinate'>
                 <div>Lat - {data.coord.lat}</div> <br/>
                 <div>Lon - {data.coord.lon}</div>
              </div>

            </div>

          </div>
        ):(<div></div>)}
      </div>



    
     

        

     

      <div className='col-md-12'>
      {data ?(

      <div className="container" >
        <div className="row">

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                    <img src={pressure} className="card-img" alt="pressure"/> Pressure
                    <h5 className="card-title mt-3"> {data.main.pressure} mb</h5>
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                    <img src={humidity} className="card-img" alt="humidity"/> Humidity
                    <h5 className="card-title mt-3"> {data.main.humidity} %</h5>
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                    <img src={high} className="card-img" alt=""/>   High
                    <h5 className="card-title mt-3"> {Math.round(data.main.temp_max-273.15)} °C </h5>
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                    <img src={low} className="card-img" alt=""/>   Low
                    <h5 className="card-title mt-3"> {Math.round(data.main.temp_min-273.15)} °C </h5>
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                    <img src={wind} className="card-img" alt=""/>   Wind  <br/><h5>{data.wind.speed} m/s</h5> 
                    
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                  <img src={farmer} className="card-img" alt=""/>  Farmer
                 
                   
                    <div>
                      {Math.round(data.main.temp_max - 273.15) >= 20 && Math.round(data.main.temp_max - 273.15) <= 35 ? (
                       <a href="#gfarm"><h5  onClick={gFarm}>Choose Type of Crops</h5></a>
      
                         ) : (
                       <a href="#bfarm"><h5 onClick={badFarm} >Choose Type of Crops</h5></a> 
      
                          )}
   

                    </div>
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                  <img src={eventplanner} className="card-img" alt=""/>  Event
                  

                 
                   
                    <div>
                      {Math.round(data.main.temp_max - 273.15) >= 20 && Math.round(data.main.temp_max - 273.15) <= 30 ? (
                       
                      <a href="#gplan"> <h5 onClick={gPlan}>Choose the event</h5></a>
      
                         ) : (
                       <a href="#bplan"> <h5 onClick={bPlan}>Choose the event</h5></a>
      
                          )}
                      
   
    

                    </div>
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                  <img src={travel} className="card-img" alt=""/>  Travelling
                 
                   
                    <div>
                      {Math.round(data.main.temp_max - 273.15) >= 20 && Math.round(data.main.temp_max - 273.15) <= 30 ? (
                     <a href="#gtravel">  <h5 onClick={gTravel}>Where to Travel</h5></a>
      
                         ) : (
                       <a href="#btravel"> <h5 onClick={bTravel}>Where to Travel</h5></a>
      
                          )}
                         
   
                    </div>
                  </div>
                </div>
            </div>
          </div> 


         

        </div>
      </div>
      
     
      ):<div></div>}</div>



                           
    {isOpen && <Farmer
      conten={<>
        <header style={{color:"blue"}}><h3>Warm Season Crops</h3></header><br/>
        <ul>
        <li style={{color:"black"}}>Tomatoes, Peppers, Eggplant, Cucumbers, Squash, Corn.</li>
        <li style={{color:"black"}}>These crops thrive in warmer temperatures ranging from 20°C to 35°C.</li>
        <li style={{color:"black"}}> They are usually planted in late spring or early summer after the danger of frost has passed.</li>
        </ul>
      </>}
      handleClos={gFarm}
    />}


{bfarm && <Farmer
      conten={<>
        <header style={{color:"blue"}}><h3>Cool Season Crops</h3></header><br/>
        <ul>
        <li style={{color:"black"}}>Lettuce, Spinach, Kale, Peas, Broccoli, Cauliflower.</li>
        <li style={{color:"black"}}>These crops prefer cooler temperatures ranging from 7°C to 19°C.</li>
        <li style={{color:"black"}}> They are usually planted in late spring or early summer after the danger of frost has passed.</li>
        </ul>
      </>}
      handleClos={badFarm}
    />}


{gOpen && <Cards
      contents={<>
        <header style={{color:"blue"}}><h3>Great Time for events</h3></header><br/>
        <ul>
        <li style={{color:"black"}}> Swimming</li>
        <li style={{color:"black"}}>  Weddings</li>
        <li style={{color:"black"}}> Birthday Parties</li>
        <li style={{color:"black"}}>  Marathons</li>
        <li style={{color:"black"}}>  Sports Activities </li>
        <li style={{color:"black"}}> Team Building Activities</li>
        
        <li style={{color:"black"}}> Event planning involves careful consideration of the goals, audience, logistics, budget, and overall experience desired for each unique event.</li>
        </ul>
      </>}
      handleCloses={gPlan}
    />} 
     {bOpen && <Cards
      contents={<>
        <header style={{color:"blue"}}><h3>Great Time for events</h3></header><br/>
        <ul>
        <li style={{color:"black"}}>Trekking</li>
        <li style={{color:"black"}}>Fishing</li>
        <li style={{color:"black"}}>Sunrise and Sunset</li>
        <li style={{color:"black"}}> Boating</li>
        <li style={{color:"black"}}> Event planning involves careful consideration of the goals, audience, logistics, budget, and overall experience desired for each unique event.</li>
        </ul>
      </>}
      handleCloses={bPlan}
    />} 


{gTrav && <Popup
      content={<>
        <header style={{color:"blue"}}><h3>Great Time for Travel</h3></header><br/>
        <ul>
        <li style={{color:"black"}}>beach vacations</li>
        <li style={{color:"black"}}>water activities like theme park, water park</li>
        <li style={{color:"black"}}>historical sites</li>
        <li style={{color:"black"}}>vibrant markets</li>
       
        </ul>
      </>}
      handleClose={gTravel}
    />} 

{bTrav && <Popup
     content={<>
        <header style={{color:"blue"}}><h3>Great Time for Travel</h3></header><br/>
        <ul>
        <li style={{color:"black"}}>Mountainous Regions</li>
        <li style={{color:"black"}}>wildLife park</li>
        <li style={{color:"black"}}>Visit Lakes</li>
        <li style={{color:"black"}}>Bike ride for Long Road</li>
        </ul>
      </>}
      handleClose={bTravel}
    />} 




      
      
    </div>
    </section>
  )
}

export default App
