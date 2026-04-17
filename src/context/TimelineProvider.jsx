import { createContext, useState } from 'react';

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);

    const addLog = (type, friendName) => {
        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            type,
            friendName, 
            title: `${type} with ${friendName}`,
        };
        setTimeline([newEntry, ...timeline]);
    };

    return (
        <TimelineContext.Provider value={{ timeline, addLog }}>
            {children}
        </TimelineContext.Provider>
    );
};