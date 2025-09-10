import React, { useContext, useState , useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import FeedbackContext from './context/FeedbackContext';



const FeedbackForm = () => {

const [text,setText] = useState("");
const [btnDisable , setBtnDisable] = useState(true);
const [message , setMessage] = useState('');

const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext);


useEffect(()=>{
    if(feedbackEdit.edit === true){
         setBtnDisable(false)
         setText(feedbackEdit.item.text)
    }

},[feedbackEdit]);



const handleChange = (e) => {
    if(text===""){
        setBtnDisable(true);
        setMessage(null)
    }else if(text!=="" && text.trim().length<= 10){
        setBtnDisable(true);
        setMessage("Text must be above 10 characters ")
    }else{
        setBtnDisable(false);
        setMessage(null)
    }

    setText(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    
    if(text.trim().length > 10){
        const newFeedback = {
            text : text
        }

    if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id , newFeedback);
    }else{
        addFeedback(newFeedback);
    }
    
    
    setBtnDisable(true);
    setMessage(null)
    setText("")
    }
}

  return (
      <Card>
          <form onSubmit={handleSubmit}>
            <h3>Add your reviews</h3>
            <div className="input-group">
                <input value={text} onChange={handleChange} type="text" placeholder='write your review'/>
                <Button isDisabled={btnDisable} type='submit'>
                    Send
                </Button>
            </div>
            {message && <p className='error'>{message}</p>}
          </form>
      </Card>
  )
}

export default FeedbackForm
