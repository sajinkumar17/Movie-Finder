import React, { useContext, useState } from 'react'
import Card from './shared/Card'
import { FaRegTrashAlt } from "react-icons/fa";
import FeedbackContext from './context/FeedbackContext';
import { MdModeEditOutline } from "react-icons/md";

const feedbackItems = ({item}) => {

  const {deleteFeedback,editFeedback} = useContext(FeedbackContext)

const onDelete = (id) => {
  console.log(id)
}

  return (
    <Card >
      <div className="text-display">
          {item.text}
          <button className='delete' onClick={()=> deleteFeedback(item.id)}>
            <FaRegTrashAlt color='red'/>
          </button>
          <button className='edit' onClick={()=>editFeedback(item)}>
             <MdModeEditOutline />
          </button>
      </div> 
    </Card>
      
    
  )
}

export default feedbackItems