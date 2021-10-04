import React from 'react';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';

import { useSearchPlayersLazyQuery } from '@generated/graphql';

import {
  TAutocompletePlayersSearchProps,
  TAutocompletePlayersSearchResult,
} from '@customTypes/components';

const Autocomplete: React.FC<TAutocompletePlayersSearchProps> = ({
  defaultValue,
  callback,
  isInvalid,
}) => {
  const [getPlayerResults, { loading, data }] = useSearchPlayersLazyQuery();

  const handleSearch = (query: string) => {
    getPlayerResults({
      variables: { input: `%${query}%` },
    });
  };

  return (
    <AsyncTypeahead
      filterBy={() => {
        return true;
      }}
      id={`autocomplete-input-players`}
      onChange={(selected: TAutocompletePlayersSearchResult[]) => {
        if (selected.length > 0) {
          callback(selected[0].id);
        }
      }}
      defaultInputValue={defaultValue ? defaultValue : undefined}
      isLoading={loading}
      labelKey="name"
      minLength={1}
      onSearch={handleSearch}
      options={data?.Players ? data?.Players : []}
      placeholder="Search..."
      renderMenuItemChildren={(
        option: TAutocompletePlayersSearchResult,
        props,
      ) => <Highlighter search={props.text || ''}>{option.name}</Highlighter>}
      isInvalid={isInvalid}
      useCache={false}
    />
  );
};

export default Autocomplete;
