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

export const StopsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stops, setStops] = useState<Stop[]>([
    { number: 1, name: 'benz circle' },
    { number: 2, name: 'varadhi' },
    { number: 3, name: 'tadepalli' }
  ]);

  const addStop = (stop: Stop) => {
    setStops([...stops, stop]);
  };

  const deleteStop = (number: number) => {
    setStops(stops.filter(stop => stop.number !== number));
  };

  return (
    <StopsContext.Provider value={{ stops, addStop, deleteStop }}>
      {children}
    </StopsContext.Provider>
  );
};
