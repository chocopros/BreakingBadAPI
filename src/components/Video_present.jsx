import React from 'react'

const Video_present = () => {
  return (
    <section className='container__trailer'>

      <h2>PREMIER TRAILER VIDEO</h2>
      <h3>Trailer Cortesia <span className='amc'>amc</span></h3>


      <video className='trailer' controls autoPlay>
        <source src='\src\assets\trailer.mp4' />
      </video>




    </section>
  )
}

export default Video_present