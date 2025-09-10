import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import FeedbackList from '../components/FeedbackList';
import FeedbackLength from '../components/FeedbackLength';
import FeedbackForm from '../components/FeedbackForm';
import  FeedbackContext, {FeedbackProvider} from '../components/context/FeedbackContext';
import FeedbackTheme, { FeedbackThemeProvider } from '../components/context/FeedbackTheme';


 

const App = () => {

  // const {loading} = useContext(FeedbackContext);

  // if(loading){
  //   return <h2>Loading.....</h2>
  // }

  return (
    <FeedbackThemeProvider>
    <FeedbackProvider>
      <Header text="Review App" bgColor = "blue" textColor = "white"/>
      <div className='container '>
        <FeedbackForm/>
        <FeedbackLength />
        <FeedbackList />
      </div>
    </FeedbackProvider>
    </FeedbackThemeProvider>
  ) 
}

export default App

