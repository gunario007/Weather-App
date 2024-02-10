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


import './Modal.css'
import { Link } from 'react-router-dom'



import { useState } from 'react'



const key="a74e21e2e11290ddc996d96f101cb1c8";




const Home = () => {

  const [city,setCity]=useState('');
  const [data,setData]=useState();
  const [error, setError] = useState("");

 



 

  

  

  

  




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
    <section  >
    
    <div  >
    
    
    
      <div className='App'  >

    
    
         

           <div className='input-container' style={{"margin-top":"100px"}}>
           <input type="text"
              className='input'  style={{ border: '1px solid #ccc'}} 
              value={city}
              onChange={e=>setCity(e.target.value)}
              placeholder='enter the city name'
            />
            <button className="buttons" onClick={()=>fetchData()}>Search</button>
        
            </div>
      
          <p style={{ color: "red" }}>{error}</p>
 
      </div>
     
     <div className='App'>
      <div className='col-md-12'>
        {data && (
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
        )}
      </div>
      </div>



    
     

        

     
    <div className='App'>
     
      {data && (

      <div className="container" >
        <div className="row">
        

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                    <img src={pressure} className="card-img" alt="pressure"/><br/> Pressure
                    <h5 > {data.main.pressure} mb</h5>
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                    <img src={humidity} className="card-img" alt="humidity"/> <br/>Humidity
                    <h5 > {data.main.humidity} %</h5>
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                    <img src={high} className="card-img" alt="high"/> <br/>    High 
                    <h5 > {Math.round(data.main.temp_max-273.15)} °C </h5>
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                    <img src={low} className="card-img" alt="low"/> <br/>   Low 
                    <h5 > {Math.round(data.main.temp_min-273.15)} °C </h5>
                  </div>
                </div>
            </div>
          </div> 


      </div>
     


      
        <div className='row'>
        <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                    <img src={wind} className="card-img" alt=""/> <br/>  Wind  <div>{data.wind.speed} m/s</div> 
                    
                  </div>
                </div>
            </div>
          </div> 

          <div className="col-md-3 mt-3">
            <div className="card bg-gradient text-light">
                <div className='cardcolor'>
                  <div className="card-body text-center">
                  <img src={farmer} className="card-img" alt=""/> <br/> Farmer<br/>
                 
                 
                    <div>
                      {Math.round(data.main.temp_max - 273.15) >= 20 && Math.round(data.main.temp_max - 273.15) <= 35 ? (
                        <Link to="/farmers">Type of Crops</Link>
      
                         ) : ( <Link to="/bfarmers">Type of Crops</Link>
                       
      
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
                  <img src={eventplanner} className="card-img" alt=""/> <br/> Event
                  

              
                   
                    <div>
                      {Math.round(data.main.temp_max - 273.15) >= 20 && Math.round(data.main.temp_max - 273.15) <= 35 ? (
                       
                        <Link to="/event">Types of event</Link>
      
                         ) : (
                            <Link to="/bevent">Types of event</Link>
                       
      
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
                  <img src={travel} className="card-img" alt=""/>  <br/>Travelling
                 
             
                    <div>
                      {Math.round(data.main.temp_max - 273.15) >= 20 && Math.round(data.main.temp_max - 273.15) <= 35 ? (
                        <Link to="/travellers">Where to Travel</Link>
      
                         ) : (
                            <Link to="/btravellers">Where to Travel</Link>
      
                          )}
                         
   
                    </div>
                  </div>
                </div>
            </div>
          </div> 


        </div>
        </div>
    




         

         

        
      
     
      )}
      </div>





      
      
    </div>
    </section>
  )
}

export default Home
