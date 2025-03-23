import React, { createContext } from 'react';

export const OutletContext = createContext(null);

export const OutletProvider = ({ children}) => (
    <OutletContext.Provider value={null}>
        {children}
    </OutletContext.Provider>
);