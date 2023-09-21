import { useState } from "react";
import DarkThemeContext from "./darkThemeContext.jsx";

const DarkThemeState = (props)=>{

    // const [ darkTheme, setDarkTheme ] = useState(false);

    // const updateTheme = ()=>{
    //     setDarkTheme((prev)=>{return !prev});
    // }

    // const darkTheme = false;
    // const toggleTheme = (darkTheme)=>{
    //     return !darkTheme;
    // }
    // toggleTheme(darkTheme);

    const [darkTheme, setTheme] = useState(true);

    const updateTheme = (str)=> {
        if(str==="white") setTheme(false);
        if(str==="black") setTheme(true);
        if(str==="toggle") setTheme((prev)=>!prev);
    }

    return (
        <DarkThemeContext.Provider value={{darkTheme, updateTheme, setTheme}} >
            {props.children}
        </DarkThemeContext.Provider>
    );
}

export default DarkThemeState;