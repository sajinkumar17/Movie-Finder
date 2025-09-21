import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import FeedbackList from '../components/FeedbackList';
import FeedbackLength from '../components/FeedbackLength';
import FeedbackForm from '../components/FeedbackForm';
import  FeedbackContext, {FeedbackProvider} from '../components/context/FeedbackContext';
import FeedbackTheme, { FeedbackThemeProvider } from '../components/context/FeedbackTheme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../components/About';



 

const App = () => {

  // const {loading} = useContext(FeedbackContext);

  // if(loading){
  //   return <h2>Loading.....</h2>
  // }

  return (
   <BrowserRouter>
     <FeedbackThemeProvider>
      <FeedbackProvider>
        <Header text="Review App" bgColor = "blue" textColor = "white"/>
        <div className='container '>
        <Routes>
          
            <Route path='/' element={
              <>
              
                <FeedbackForm/>
                <FeedbackLength />
                <FeedbackList />
              
              </>
            }/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        </div>
    </FeedbackProvider>
    </FeedbackThemeProvider>
   </BrowserRouter>
    
  ) 
}

export default App

