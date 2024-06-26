import React, { createContext, useContext, useState } from 'react';

interface Stage {
  sno: number;
  shift: string;
  location: string;
  routeName: string;
  timings: string;
  // route: string;
  startingPoint: string;
  stops: string[];
}

interface BusRoutesContextProps {
  stages: Stage[];
  addStage: (stage: Stage) => void;
  updateStage: (updatedStage: Stage) => void;
  deleteStage: (sno: number) => void;
  getRoutesForStop: (stop: string) => Stage[];
}

const BusRoutesContext = createContext<BusRoutesContextProps | undefined>(
  undefined
);

export const useBusRoutes = () => {
  const context = useContext(BusRoutesContext);
  if (!context) {
    throw new Error('useBusRoutes must be used within a BusRoutesProvider');
  }
  return context;
};

const BusRoutesProvider: React.FC = ({ children }) => {
  const [stages, setStages] = useState<Stage[]>([
    // Your predefined stages
  ]);

  const addStage = (stage: Stage) => {
    setStages((prevStages) => [...prevStages, stage]);
  };

  const updateStage = (updatedStage: Stage) => {
    setStages((prevStages) =>
      prevStages.map((stage) =>
        stage.sno === updatedStage.sno ? updatedStage : stage
      )
    );
  };

  const deleteStage = (sno: number) => {
    setStages((prevStages) => prevStages.filter((stage) => stage.sno !== sno));
  };

  const getRoutesForStop = (stop: string): Stage[] => {
    return stages.filter((stage) => stage.stops.includes(stop));
  };

  return (
    <BusRoutesContext.Provider
      value={{ stages, addStage, updateStage, deleteStage, getRoutesForStop }}
    >
      {children}
    </BusRoutesContext.Provider>
  );
};

export default BusRoutesProvider;
