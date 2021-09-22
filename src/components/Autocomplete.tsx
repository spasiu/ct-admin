import React, { useState, useEffect } from 'react';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { useSearchExtensibleValuesLazyQuery } from '@generated/graphql';

import {
  TAutocompleteProps,
  TAutocompleteSearchResult,
} from '@customTypes/components';

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
      onChange={(selected: TAutocompleteSearchResult[]) => {
        if (selected.length > 0) {
          callback(selected[0].value);
        }
      }}
      defaultInputValue={defaultValue ? defaultValue : undefined}
      isLoading={loading}
      labelKey="value"
      minLength={1}
      onSearch={handleSearch}
      options={data?.ExtensibleValues ? data?.ExtensibleValues : []}
      placeholder="Search..."
      renderMenuItemChildren={(option: TAutocompleteSearchResult, props) => (
        <Highlighter search={props.text || ''}>{option.value}</Highlighter>
      )}
      isInvalid={isInvalid}
      useCache={false}
    />
  );
};

export default Autocomplete;
