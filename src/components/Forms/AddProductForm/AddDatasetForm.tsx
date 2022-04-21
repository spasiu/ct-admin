import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Papa, { ParseResult } from 'papaparse';
import { TAddDatasetProps } from '@customTypes/products';
import { gridSpace } from '@config/chakra/constants';

const AddDatasetForm: React.FC<TAddDatasetProps> = ({
  year,
  category,
  subcategory,
  datasetHandler,
  callback,
}) => {
  const fileInput = React.createRef<HTMLInputElement>();
  const [datasetType, setDatasetType] = useState<string>('');
  const [datasetError, setDatasetError] = useState<string>('');

  const handleFileUpload = () => {
    if (fileInput?.current?.files && fileInput?.current?.files[0]) {
      const file = fileInput.current.files[0];
      Papa.parse(file, {
        header: true,
        complete: (results: ParseResult<Object>) => {
          try {
            // validate required fields for dataset
            results.data.forEach((row) => {
              if (
                !row.hasOwnProperty('name') ||
                !row.hasOwnProperty('short_code') ||
                !row.hasOwnProperty('color') ||
                !row.hasOwnProperty('color_secondary')
              )
                throw new Error(
                  'The uploaded dataset does not include the required data.',
                );
            });

            // insert dataset record into DB
            datasetHandler(
              parseInt(year),
              category,
              subcategory || null,
              datasetType || null,
              results.data,
            ).then((created) => {
              if (created) callback();
              else
                throw new Error(
                  'There was a problem inserting the new dataset in the DB. Please try again.',
                );
            });
          } catch (error: any) {
            setDatasetError(error.message);
          }
        },
      });
    }
  };

  return (
    <>
      <Flex mx={gridSpace.parent} mb={5}>
        <FormControl width="50%" px={gridSpace.child}>
          <FormLabel>Year</FormLabel>
          <Input value={year} disabled />
        </FormControl>

        <FormControl width="50%" px={gridSpace.child}>
          <FormLabel>Sport/Category</FormLabel>
          <Input value={category} disabled />
        </FormControl>
      </Flex>

      <Flex mx={gridSpace.parent} mb={5}>
        <FormControl width="50%" px={gridSpace.child}>
          <FormLabel>Subcategory</FormLabel>
          <Input value={subcategory} disabled />
        </FormControl>
        <FormControl width="50%" px={gridSpace.child}>
          <FormLabel>Type</FormLabel>
          <Select onChange={(e) => setDatasetType(e.target.value)}>
            <option value="">None</option>
            <option value="TEAM">Team</option>
            <option value="DIVISION">Division</option>
          </Select>
        </FormControl>
      </Flex>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={handleFileUpload}
      />
      <Flex mx={gridSpace.parent} mb={5}>
        <Button
          colorScheme="red"
          size="md"
          onClick={() => {
              setDatasetError('');
            fileInput.current?.click();
          }}
        >
          Upload CSV
        </Button>
        {datasetError && (
          <span
            style={{
              color: 'red',
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            {datasetError}
          </span>
        )}
      </Flex>
    </>
  );
};

export default AddDatasetForm;
