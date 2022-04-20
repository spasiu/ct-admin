import { useGetProductsQuery, Unit_Of_Measure_Enum } from '@generated/graphql';
import { TInventoryAutcomplete } from '@customTypes/inventory';
import { TBreakData } from '@customTypes/breaks';

export default function useGetInventory(
  setPickerInventory: ([]) => void,
  setSelectedInventory: ([]) => void,
  break_data?: TBreakData,
) {
  const {} = useGetProductsQuery({
    variables: {
      unitOfMeasure: [
        Unit_Of_Measure_Enum.Box,
        Unit_Of_Measure_Enum.Case,
        Unit_Of_Measure_Enum.Pack,
      ],
      input: '%',
    },
    onCompleted: (data) => {
      const pickerItems: TInventoryAutcomplete[] = data.Products.map(
        (product) => {
          return {
            label: product.description || '',
            value: product.id,
            year: product.year,
            sport: product.category,
            subcategory: product.subcategory
          };
        },
      );

      const selectedItems: TInventoryAutcomplete[] = data.Products.filter(
        (product) =>
          product.break_products
            .map((item) => item.Break.id)
            .includes(break_data?.id),
      ).map((product) => {
        return {
          label: product.description || '',
          value: product.id,
          year: product.year,
          sport: product.category,
          subcategory: product.subcategory
        };
      });

      setPickerInventory(pickerItems);
      setSelectedInventory(selectedItems);
    },
  });
}
