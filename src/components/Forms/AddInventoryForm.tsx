import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import format from 'date-fns/format';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Select,
} from '@chakra-ui/react';

import { gridSpace } from '@config/chakra/constants';
import {
  useInsertInventoryMutation,
  useGetFilteredExtensibleValuesQuery,
  useUpdateInventoryMutation,
} from '@generated/graphql';
import DatePickerDisplay from '@components/DatePickerDisplay';

const schema = yup.object().shape({
  supplier: yup.string().required('Required'),
  purchase_date: yup.date().required('Required'),
  location: yup.string().required('Required'),
  cost_basis: yup
    .number()
    .typeError('Must be a number')
    .test('is-currency', 'Must be a valid price', (value) => {
      const currRegex = /^[1-9]\d*(\.\d{1,2})?$/;

      return value ? currRegex.test(String(value)) : false;
    })
    .min(0, 'Must be greater than 0')
    .required('Required'),
  units: yup
    .number()
    .integer()
    .typeError('Numbers only')
    .min(1, 'Must be greater than 1')
    .required('Required'),
});

type TFormData = {
  supplier: string;
  location: string;
  purchase_date: Date;
  cost_basis: number;
  units: number;
};

type TFormProps = {
  product_id: string;
  inventoryItem?: {
    id: string;
    supplier: string;
    location: string;
    purchase_date: string;
    cost_basis: number;
  };
  callback: () => void;
};

/**
 *
 * TODO: Handle errors
 *
 */
const AddInventoryForm: React.FC<TFormProps> = ({
  product_id,
  inventoryItem,
  callback,
}) => {
  const operation = inventoryItem?.id ? 'UPDATE' : 'ADD';

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...(inventoryItem || {}),
      units: inventoryItem ? 1 : undefined,
      purchase_date: inventoryItem
        ? new Date(inventoryItem?.purchase_date)
        : undefined,
    },
  });

  const [
    insertInventory,
    {
      data: insertMutationData,
      loading: insertMutationLoading,
      error: insertMutationError,
    },
  ] = useInsertInventoryMutation({ onCompleted: callback });

  const [
    updateInventory,
    {
      data: updateMutationData,
      loading: updateMutationLoading,
      error: updateMutationError,
    },
  ] = useUpdateInventoryMutation({
    onCompleted: callback,
  });

  const {
    loading: extensibleValueQueryLoading,
    error: extensibleValueQueryError,
    data: extensibleValueQueryData,
  } = useGetFilteredExtensibleValuesQuery({
    variables: { fields: ['inventory_location', 'inventory_supplier'] },
    onCompleted: () => {
      reset({
        ...(inventoryItem || {}),
        units: inventoryItem ? 1 : undefined,
        purchase_date: inventoryItem
          ? new Date(inventoryItem?.purchase_date)
          : undefined,
      });
    },
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TFormData) => {
    if (operation === 'ADD') {
      // Generate number of products equal to number of units
      const inventory = Array(result.units).fill({
        product_id: product_id,
        supplier: result.supplier,
        location: result.location,
        purchase_date: format(result.purchase_date, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        cost_basis: result.cost_basis,
      });

      insertInventory({
        variables: {
          inventory,
        },
      });
    } else if (operation === 'UPDATE') {
      const updateData = {
        supplier: result.supplier,
        location: result.location,
        purchase_date: format(result.purchase_date, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        cost_basis: result.cost_basis,
      };

      updateInventory({
        variables: {
          id: inventoryItem?.id,
          data: updateData,
        },
      });
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Flex mx={gridSpace.parent} mb={5}>
        <FormControl isInvalid={!!errors.supplier} px={gridSpace.child}>
          <FormLabel>Supplier</FormLabel>
          <Select {...register('supplier')}>
            <option value="">Select...</option>
            {extensibleValueQueryData?.ExtensibleValues.filter(
              (o) => o.field === 'inventory_supplier',
            ).map((val) => (
              <option
                key={`option-${val.field}-${val.value}`}
                value={val.value}
              >
                {val.value}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors.supplier?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.purchase_date} px={gridSpace.child}>
          <FormLabel>Purchase Date</FormLabel>
          <Controller
            name="purchase_date"
            defaultValue={new Date(new Date().setHours(0, 0, 0, 0))}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePicker
                selected={value}
                dateFormat="MMMM d, yyyy"
                onChange={onChange}
                onBlur={onBlur}
                customInput={<DatePickerDisplay />}
              />
            )}
          />
          <FormErrorMessage>{errors.purchase_date?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      <Flex mx={gridSpace.parent} mb={10}>
        <FormControl isInvalid={!!errors.cost_basis} px={gridSpace.child}>
          <FormLabel>Cost Basis ($)</FormLabel>
          <Input {...register('cost_basis')} />
          <FormErrorMessage>{errors.cost_basis?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.location} px={gridSpace.child}>
          <FormLabel>Location</FormLabel>
          <Select {...register('location')}>
            <option value="">Select...</option>
            {extensibleValueQueryData?.ExtensibleValues.filter(
              (o) => o.field === 'inventory_location',
            ).map((val) => (
              <option
                key={`option-${val.field}-${val.value}`}
                value={val.value}
              >
                {val.value}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors.location?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      {operation === 'ADD' && (
        <Flex mx={gridSpace.parent} mb={10}>
          <FormControl
            width="50%"
            isInvalid={!!errors.units}
            px={gridSpace.child}
          >
            <FormLabel>Units</FormLabel>
            <Input {...register('units')} />
            <FormErrorMessage>{errors.units?.message}</FormErrorMessage>
          </FormControl>
        </Flex>
      )}

      <Flex justifyContent="center">
        <Button mb={4} px={10} colorScheme="blue" type="submit">
          {operation === 'ADD' ? 'Add Inventory' : 'Update'}
        </Button>
      </Flex>
    </form>
  );
};

export default AddInventoryForm;
