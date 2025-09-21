import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='about'>
      <h2>This is the about page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolor molestias? Deserunt odit voluptate, ab cum alias facere nemo molestiae, doloremque temporibus fugit reprehenderit! Harum, quasi! Fugiat laboriosam asperiores cupiditate.</p>
      <Link to="/" className='btn btn-primary'>Go Home</Link>
    </div>
  )
}

export default About
