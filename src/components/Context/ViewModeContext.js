import React, { createContext, useContext, useState } from 'react';

const ViewModeContext = createContext();

export const ViewModeProvider = ({ children }) => {
    const [viewMode, setViewMode] = useState('cards');

    const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === 'cards' ? 'table' : 'cards'));
    };

    return (
        <ViewModeContext.Provider value={{ viewMode, toggleViewMode }}>
            {children}
        </ViewModeContext.Provider>
    );
};

export const useViewMode = () => {
    const context = useContext(ViewModeContext);
    if (!context) {
        throw new Error('useViewMode must be used within a ViewModeProvider');
    }
    return context;
};
