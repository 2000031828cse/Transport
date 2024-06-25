// src/content/applications/StopsContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Stop {
  number: number;
  name: string;
}

interface StopsContextType {
  stops: Stop[];
  addStop: (stop: Stop) => void;
  deleteStop: (number: number) => void;
}

const StopsContext = createContext<StopsContextType | undefined>(undefined);

export const useStops = () => {
  const context = useContext(StopsContext);
  if (!context) {
    throw new Error('useStops must be used within a StopsProvider');
  }
  return context;
};

export const StopsProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [stops, setStops] = useState<Stop[]>([]);

  const addStop = (stop: Stop) => {
    setStops((prevStops) => [...prevStops, stop]);
  };

  const deleteStop = (number: number) => {
    setStops((prevStops) => prevStops.filter((stop) => stop.number !== number));
  };

  return (
    <StopsContext.Provider value={{ stops, addStop, deleteStop }}>
      {children}
    </StopsContext.Provider>
  );
};
