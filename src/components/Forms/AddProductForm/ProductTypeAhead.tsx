import { TOption, TProductTypeAhead } from '@customTypes/products';
import { Typeahead } from 'react-bootstrap-typeahead';

export const ProductTypeAhead: React.FC<TProductTypeAhead> = ({
  field,
  setValue,
  productOptions,
  defaultValue,
  onBlur,
}) => {
  
  const formatOptions = (values: string[]) => 
    values.map((v) => ({ label: v } as TOption)) || [];

  return (
    <Typeahead
      clearButton
      allowNew
      id={field}
      onChange={(selected: TOption[]) => {
        setValue(field, selected[0]?.label);
      }}
      newSelectionPrefix=""
      options={formatOptions(productOptions[field as keyof typeof productOptions])}
      placeholder={`Choose a ${field}...`}
      defaultInputValue={defaultValue || undefined}
      onBlur={onBlur}
    />
  );
};
