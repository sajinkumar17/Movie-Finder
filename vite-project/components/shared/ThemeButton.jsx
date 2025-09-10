import React, { useContext } from 'react'
import { MdDarkMode } from "react-icons/md";
import FeedbackTheme from '../context/FeedbackTheme';

const ThemeButton = () => {

    const {changeTheme} = useContext(FeedbackTheme)
  return (
    <div className='theme-icon'>
        <button>
            <MdDarkMode onClick={()=> changeTheme()} />
        </button>
      
    </div>
  )
}

export default ThemeButton
