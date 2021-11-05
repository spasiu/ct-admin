import { TBreakLineItem, TDatasetLineItem } from '@customTypes/breaks';
import { TInventoryAutcomplete } from '@customTypes/inventory';
import { Break_Type_Enum } from '@generated/graphql';

export const getSpotOptions = (
  watchType: string,
  numOfElements: number,
): number[] => {
  if (watchType === Break_Type_Enum.HitDraft) {
    return [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  } else {
    const factorsArr = [];
    for (let i = numOfElements; i > 1; i--) {
      if (numOfElements % i === 0) factorsArr.push(i);
    }
    return factorsArr;
  }
};

export const getQueryVars = (selectedInventory: TInventoryAutcomplete[]) => {
  return {
    sport: selectedInventory[selectedInventory.length - 1].sport.toLowerCase(),
    year: parseInt(selectedInventory[selectedInventory.length - 1].year),
  };
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
