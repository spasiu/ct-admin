import React, { useState, useEffect } from 'react';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { useSearchExtensibleValuesLazyQuery } from '@generated/graphql';

type TAutocompleteProps = {
  field: string;
  defaultValue?: string | null;
  callback: (input: string) => void;
  isInvalid: boolean;
};

type TSearchResult = {
  field: string;
  value: string;
};

// USAGE:
// <Autocomplete
//   isInvalid={!!errors.manufacturer}
//   defaultValue={product?.manufacturer}
//   callback={(val: string) => {
//     setValue('manufacturer', val);
//   }}
//   field="product_manufacturer"
// />;

const Autocomplete: React.FC<TAutocompleteProps> = ({
  defaultValue,
  field,
  callback,
  isInvalid,
}) => {
  const [
    getSearchResults,
    { loading, data },
  ] = useSearchExtensibleValuesLazyQuery();

  const handleSearch = (query: string) => {
    getSearchResults({
      variables: { input: `%${query}%`, field },
    });
  };

  return (
    <AsyncTypeahead
      filterBy={() => {
        return true;
      }}
      id={`autocomplete-input-${field}`}
      onChange={(selected: TSearchResult[]) => {
        if (selected.length > 0) {
          callback(selected[0].value);
        }
      }}
      defaultInputValue={defaultValue}
      isLoading={loading}
      labelKey="value"
      minLength={1}
      onSearch={handleSearch}
      options={data?.ExtensibleValues ? data?.ExtensibleValues : []}
      placeholder="Search..."
      renderMenuItemChildren={(option: TSearchResult, props) => (
        <Highlighter search={props.text || ''}>{option.value}</Highlighter>
      )}
      isInvalid={isInvalid}
      useCache={false}
    />
  );
};

export default Autocomplete;
