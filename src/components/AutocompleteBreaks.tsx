import React, { useState, useEffect } from 'react';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { useSearchBreaksLazyQuery } from '@generated/graphql';

type TAutocompleteProps = {
  defaultValue?: string | null;
  isInvalid: boolean;
  callback: (input: string) => void;
};

type TSearchResult = {
  id: string;
  title: string;
};

const Autocomplete: React.FC<TAutocompleteProps> = ({
  defaultValue,
  callback,
  isInvalid,
}) => {
  const [getBreakResults, { loading, data }] = useSearchBreaksLazyQuery();

  const handleSearch = (query: string) => {
    getBreakResults({
      variables: { input: `%${query}%` },
    });
  };

  return (
    <AsyncTypeahead
      filterBy={() => {
        return true;
      }}
      id={`autocomplete-input-breaks`}
      onChange={(selected: TSearchResult[]) => {
        if (selected.length > 0) {
          callback(selected[0].id);
        }
      }}
      defaultInputValue={defaultValue ? defaultValue : undefined}
      isLoading={loading}
      labelKey="title"
      minLength={1}
      onSearch={handleSearch}
      options={data?.Breaks ? data?.Breaks : []}
      placeholder="Search..."
      renderMenuItemChildren={(option: TSearchResult, props) => (
        <Highlighter search={props.text || ''}>{option.title}</Highlighter>
      )}
      isInvalid={isInvalid}
      useCache={false}
    />
  );
};

export default Autocomplete;
