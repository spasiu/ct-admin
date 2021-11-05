import { TBreakLineItem, TDatasetLineItem } from '@customTypes/breaks';
import { TInventoryAutcomplete } from '@customTypes/inventory';
import { Break_Type_Enum } from '@generated/graphql';

const getValidFactors = (num: number, maxTeams: number): number[] => {
  const factors = [] as number[];
  for (let i = num; i > 0; i--) {
    if (num % i === 0) factors.push(i);
  }
  return factors.filter((val) => num / val < maxTeams);
};

const buildDataObj = (dataItem: any, keys: string[]) => {
  const item = {} as any;
  keys.forEach((key) => {
    if (key.includes('+')) {
      const parts = key.split('+') as string[];
      let str = '';
      parts.forEach(
        (part, idx) => (str += `${dataItem[part]}${parts[idx + 1] ? ' ' : ''}`),
      );
      item[parts[parts.length - 1]] = str;
    } else {
      item[key] = dataItem?.[key] || 0;
    }
  });
  return item;
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
  };
};

export const getNewLineItems = (data: TBreakLineItem[], keys: string[]) => {
  const newLineItems = [];
  for (let i = 0; i < data?.length || 0; i++) {
    const dataItem = buildDataObj(data?.[i], keys) as TBreakLineItem;
    newLineItems.push(dataItem);
  }
  return newLineItems || [];
};

export const getNewDatasetItems = (
  data: TDatasetLineItem[],
  newDatasetLinesToAdd: number,
  keys: string[],
) => {
  const newDatasetItems = [];
  for (let i = 0; i < newDatasetLinesToAdd; i++) {
    const dataItem = buildDataObj(data?.[i], keys) as TDatasetLineItem;
    newDatasetItems.push(dataItem);
  }

  return newDatasetItems || [];
};
