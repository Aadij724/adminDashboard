import { useState } from "react";
import DarkThemeContext from "./darkThemeContext.jsx";

const DarkThemeState = (props)=>{

    const [ darkTheme, setDarkTheme ] = useState(false);

    const updateTheme = ()=>{
        setDarkTheme((prev)=>{return !prev});
    }

    return (
        <DarkThemeContext.Provider value={{darkTheme, updateTheme}} >
            {props.children}
        </DarkThemeContext.Provider>
    );
}

export default DarkThemeState;