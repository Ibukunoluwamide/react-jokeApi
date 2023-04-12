import axios from 'axios'
import React, { useEffect, useState } from 'react'

const jokesApi = () => {
  useEffect(() => {
    fetchJokes()
  }, [])
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
          <h1 className='text-center fw-bold' style={{color: "red"}}>Jokes</h1>
        <div className='bg-prima rounded ps-2'>
          <h3 className='fs-2 text-center' style={{color: "red"}}>{response.category}</h3>
          <p className='fs-4' style={{color: "#363635"}}>{response.joke}</p>
       <div className="text-center">
       <button onClick={fetchJokes} className='btn btn-outline-warning text-white mt-2 col-7 mb-3'>Get Jokes</button>
       </div>
        </div>

      </section>
    
    </>
  )
}

export default jokesApi