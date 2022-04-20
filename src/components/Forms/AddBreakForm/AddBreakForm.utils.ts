import { TInventoryAutcomplete } from '@customTypes/inventory';
import { Break_Type_Enum } from '@generated/graphql';

const getValidFactors = (num: number, maxTeams: number): number[] => {
  const factors = [] as number[];
  for (let i = num; i > 0; i--) {
    if (num % i === 0) factors.push(i);
  }
  return factors.filter((val) => num / val < maxTeams);
};

export const getSpotOptions = (
  watchType: string,
  numOfElements: number,
): number[] => {
  let factorsArr = [] as number[];
  switch (watchType) {
    case Break_Type_Enum.HitDraft: {
      factorsArr = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
      break;
    }
    case Break_Type_Enum.RandomDivision: {
      factorsArr = [numOfElements];
      break;
    }
    case Break_Type_Enum.RandomTeam: {
      factorsArr = getValidFactors(numOfElements, 4);
      break;
    }
  }
  return factorsArr;
};

export const getQueryVars = (selectedInventory: TInventoryAutcomplete[]) => {
  return {
    sport: selectedInventory[selectedInventory.length - 1].sport.toLowerCase(),
    year: parseInt(selectedInventory[selectedInventory.length - 1].year),
    subcategory: selectedInventory[selectedInventory.length - 1].subcategory
  };
};