// BusRoutesContext.js or BusRoutesContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface Stage {
  sno: number;
  shift: string;
  location: string;
  routeId: string;
  timings: string;
  route: string;
  startingPoint: string;
  stops: string[];
}

interface BusRoutesContextProps {
  stages: Stage[];
  addStage: (stage: Stage) => void;
  updateStage: (updatedStage: Stage) => void;
  deleteStage: (sno: number) => void;
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
    {
      sno: 1,
      shift: 'Morning',
      location: 'Guntur',
      routeId: '8A',
      timings: '8:00 AM',
      route: 'Gorantla',
      startingPoint: 'Gorantla',
      stops: ['Gorantla', 'Chilles']
    },
    {
      sno: 2,
      shift: 'Morning',
      location: 'Guntur',
      routeId: '8B',
      timings: '8:00 AM',
      route: 'Gorantla',
      startingPoint: 'Medical Hostel',
      stops: ['Medical Hostel', 'Nagarulu', 'Vijaya Digital', 'Inner Ring Road']
    },
    {
      sno: 3,
      shift: 'Morning',
      location: 'Guntur',
      routeId: '8C',
      timings: '8:00 AM',
      route: 'Lodge Center',
      startingPoint: 'Lodge Center',
      stops: [
        'Lodge Center',
        'SBI',
        'Ala Hospital',
        'AJ Gudi',
        'Inner Ring Road'
      ]
    },
    {
      sno: 4,
      shift: 'Morning',
      location: 'Guntur',
      routeId: '8D',
      timings: '8:00 AM',
      route: 'SVN Colony',
      startingPoint: 'SVN Colony',
      stops: ['SVN Colony', 'Gujjanagundla Centre']
    }
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

  return (
    <BusRoutesContext.Provider
      value={{ stages, addStage, updateStage, deleteStage }}
    >
      {children}
    </BusRoutesContext.Provider>
  );
};

export default BusRoutesProvider;
