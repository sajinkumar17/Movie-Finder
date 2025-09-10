import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext(); 

export const FeedbackProvider = ({children}) => {

    const [loading, setLoading] = useState(true); 

    const [feedback,setFeedback] = useState ([
        {
        id : 1,
        text : 'This is a sample context 1'
        },
        {
        id : 2,
        text : 'This is a sample context 2'
        },
        {
        id : 3,
        text : 'This is a sample context 3 '
        },
    ]);


    useEffect(() => {
        fetchFeedback(); 
    },[])

    // const fetchFeedback  = async () => {
    //     const response = await  fetch("http://localhost:3000/posts");
    //     const  data = await response.json();
    //     setFeedback(data)
    // }

    const fetchFeedback = async () => {
        setLoading(true); 
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setFeedback(data);
        setLoading(false); 
};

    const [feedbackEdit,setFeedbackEdit] = useState({
        item : {},
        edit : false
    })

    const deleteFeedback = async (id) => {
        if(window.confirm("Are you sure?")){
            await fetch(`http://localhost:3000/posts/${id}`, { method: "DELETE" });
            setFeedback(feedback.filter( (item) => item.id!==id )
        )
        }
        
  } 

//     const addFeedback = (newFeedback) => {
//         newFeedback.id= uuidv4();
//         setFeedback([...feedback,newFeedback])
//   }

const addFeedback = async (newFeedback) => {
  newFeedback.id = uuidv4();

  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFeedback),
  });

  const data = await response.json();

  setFeedback([...feedback, data]);
};

  const editFeedback = (item) => {
    setFeedbackEdit({
        item:item,
        edit:true
    })
  }
  
//   const updateFeedback = (id,updateItem) => {
//     setFeedback(feedback.map((item) => (item.id===id ) ? {...item,...updateItem} : item)) 
//   }
const updateFeedback = async (id, updateItem) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PATCH", // or "PUT"
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateItem),
  });

  const data = await response.json();

  setFeedback(
    feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
  );
};

    return <FeedbackContext.Provider value={{
        feedback,deleteFeedback,addFeedback,feedbackEdit,editFeedback,updateFeedback,loading
    }}>
        {children}
    </FeedbackContext.Provider>
    

}
export default FeedbackContext;