import React from 'react';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';

import { useSearchBreaksLazyQuery } from '@generated/graphql';

import {
  TAutocompleteBreaksEventsProps,
  TAutocompleteBreaksEventsSearchResult,
} from '@customTypes/components';

const Autocomplete: React.FC<TAutocompleteBreaksEventsProps> = ({
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
      onChange={(selected: TAutocompleteBreaksEventsSearchResult[]) => {
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
      renderMenuItemChildren={(
        option: TAutocompleteBreaksEventsSearchResult,
        props,
      ) => <Highlighter search={props.text || ''}>{option.title}</Highlighter>}
      isInvalid={isInvalid}
      useCache={false}
    />
  );
};

export default Autocomplete;
