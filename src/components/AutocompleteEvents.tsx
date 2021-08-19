import React, { useState, useEffect } from 'react';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { useSearchEventsLazyQuery } from '@generated/graphql';

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
  const [getEventResults, { loading, data }] = useSearchEventsLazyQuery();

  const handleSearch = (query: string) => {
    getEventResults({
      variables: { input: `%${query}%` },
    });
  };

  return (
    <AsyncTypeahead
      filterBy={() => {
        return true;
      }}
      id={`autocomplete-input-events`}
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
      options={data?.Events ? data?.Events : []}
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
