import axios from 'axios'
import React, { useState } from 'react'
const jokesApi = () => {
  const endPoint = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Christmas?type=single"
  const [response, setresponse] = useState([])
  const fetchJokes = () => {
    axios.get(endPoint)
      .then((result) => {
        // console.log(result.data);
        setresponse(result.data)
        // console.log(response);
      }).catch((err) => {
        console.log(err);
      });
    axios.get(endPoint)
      .then((result) => {
        // console.log(result.data);
        setresponse(result.data)
        // console.log(response);
      }).catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <section className='col-lg-5 m-auto'>
          <h2 className='text-center fw-bold' style={{color: "red"}}>Jokes</h2>
        <div className='bg-prima rounded ps-2'>
          <h3 className='fs-2 text-center'>{response.category}</h3>
          <p className='fs-4'>{response.joke}</p>
       <div className="text-center">
       <button onClick={fetchJokes} className='btn btn-outline-warning text-white mt-2 col-7'>Get Jokes</button>
       </div>
        </div>

      </section>
    
    </>
  )
}

export default jokesApi