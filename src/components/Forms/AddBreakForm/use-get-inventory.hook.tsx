import { useGetInventoryQuery } from '@generated/graphql';
import { TInventoryAutcomplete } from '@customTypes/inventory';
import { TBreakData } from '@customTypes/breaks';

export default function useGetInventory(
  setPickerInventory: ([]) => void,
  setSelectedInventory: ([]) => void,
  break_data?: TBreakData,
) {
  const {} = useGetInventoryQuery({
    onCompleted: (data) => {
      const pickerItems: TInventoryAutcomplete[] = [];
      const selectedItems: TInventoryAutcomplete[] = [];

      for (let idx = 0; idx < data.Inventory?.length; idx++) {
        if (data.Inventory[idx].break_id === null) {
          pickerItems.push({
            label: `${data.Inventory[idx].Product?.description} - ${data.Inventory[idx].location}`,
            value: data.Inventory[idx].id,
            year: data.Inventory[idx].Product?.year,
            sport: data.Inventory[idx].Product?.category,
          });
        }

        if (data.Inventory[idx].break_id === break_data?.id) {
          pickerItems.push({
            label: `${data.Inventory[idx].Product?.description} - ${data.Inventory[idx].location}`,
            value: data.Inventory[idx].id,
            year: data.Inventory[idx].Product?.year,
            sport: data.Inventory[idx].Product?.category,
          });

          selectedItems.push(pickerItems[pickerItems.length - 1]);
        }
      }

      setPickerInventory(pickerItems);
      setSelectedInventory(selectedItems);
    },
  });
}
