import React from "react";
export const themes = {
    red: {
        color: "white",
        background:"red",
    },
    blue: {
        color: "white",
        background:"blue",
    },
    green: {
        color: "white",
        background:"green",
    },
}

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;