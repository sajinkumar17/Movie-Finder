import { createContext, useContext, useState } from "react";

const FeedbackTheme = createContext();

export const FeedbackThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("white");

    const changeTheme = ()=>{
        setTheme((prev) => (
            prev==="white" ? "black" : "white"
        ));
    }
 
    // useEffect(() => {
    // document.body.style.backgroundColor = theme;
    // document.body.style.color = theme === "black" ? "white" : "black";
    // }, [theme]);

    return(
    <FeedbackTheme.Provider value={{theme,changeTheme}}>
        {children}
    </FeedbackTheme.Provider>

)}

export default FeedbackTheme;