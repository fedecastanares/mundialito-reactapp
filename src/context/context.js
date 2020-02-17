import React, { createContext, useState } from 'react'



export const SportPressContext = createContext();

const SportPressProvider = (props) => {

   

    return (
        <SportPressProvider
            value={
                division
            }
        >
            {props.children}
        </SportPressProvider>
    )
}

export default SportPressProvider;