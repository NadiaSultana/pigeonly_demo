import React, {useState, createContext} from "react";

export const ClientContext = createContext();

export const ClientContextProvider = props => {
    const [secrets, setSecrets] = useState([]);

    return (
        <ClientContext.Provider value={{secrets: secrets, setSecrets: setSecrets}}>
            {props.children}
        </ClientContext.Provider>
    )

}