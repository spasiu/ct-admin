import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Papa, { ParseResult } from 'papaparse';
import { TAddDatasetProps } from '@customTypes/products';
import { gridSpace } from '@config/chakra/constants';
import { Dataset_Type_Enum } from '@generated/graphql';

const AddDatasetForm: React.FC<TAddDatasetProps> = ({
  year,
  category,
  subcategory,
  datasetHandler,
  callback
}) => {
  const [buttonTracker, setButtonTracker] = useState<string[]>([]);

  const teamInput = React.createRef<HTMLInputElement>();
  const [teamDataError, setTeamDataError] = useState<string>('');

  const divInput = React.createRef<HTMLInputElement>();
  const [divDataError, setDivDataError] = useState<string>('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {

    const uploadType = event.currentTarget.id;
    const inputRef  = (uploadType === Dataset_Type_Enum.Team) ? teamInput : divInput;
    const buttonStateHandler  = (uploadType === Dataset_Type_Enum.Team)
      ? setButtonTracker(buttonTracker.concat(Dataset_Type_Enum.Team))
      : setButtonTracker(buttonTracker.concat(Dataset_Type_Enum.Division))
    const errorHandler  = (uploadType === Dataset_Type_Enum.Team) ?  setTeamDataError: setDivDataError;
    
    if (inputRef?.current?.files && inputRef?.current?.files[0]) {
      const file = inputRef.current.files[0];
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
              uploadType || null,
              results.data,
            ).then((created) => {
              if (created) {
                callback(buttonTracker.length === 1);
              }
              else
                throw new Error(
                  'There was a problem inserting the new dataset in the DB. Please try again.',
                );
            });
          } catch (error: any) {
            errorHandler(error.message);
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

      </Flex>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        style={{ display: 'none' }}
        ref={teamInput}
        onChange={handleFileUpload}
        id={Dataset_Type_Enum.Team}
      />

      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        style={{ display: 'none' }}
        ref={divInput}
        onChange={handleFileUpload}
        id={Dataset_Type_Enum.Division}
      />
      <Flex mx={gridSpace.parent} mb={5}>
      <FormControl width="50%" px={gridSpace.child}>
        <Button
          colorScheme="red"
          size="md"
          onClick={() => {
            setTeamDataError('');
            teamInput.current?.click();
          }}
          disabled={buttonTracker.includes(Dataset_Type_Enum.Team)}
        >
          Team CSV
        </Button>
        {teamDataError && (
          <p
            style={{
              color: 'red',
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            {teamDataError}
          </p>
        )}
        </FormControl>
        <FormControl width="50%" px={gridSpace.child}>
        <Button
          colorScheme="red"
          size="md"
          onClick={() => {
            setDivDataError('');
            divInput.current?.click();
          }}
          disabled={buttonTracker.includes(Dataset_Type_Enum.Division)}
        >
          Division CSV
        </Button>
        { divDataError && (
          <p
            style={{
              color: 'red',
              paddingLeft: 10,
              paddingTop: 5,
            }}
          >
            {divDataError}
          </p>
        )}
        </FormControl>

      </Flex>
    </>
  );
};

export default AddDatasetForm;
