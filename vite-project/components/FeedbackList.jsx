import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'
const FeedbackList = ({handleDelete}) => {

  const {feedback} = useContext(FeedbackContext);
  console.log(useContext(FeedbackContext))


 if(feedback.length==0) {
    return <p className='no-item'>No items available</p>
 }
  return (
    <div className='feedback-list'>
      {
        feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default FeedbackList
