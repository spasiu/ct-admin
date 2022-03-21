import React, { useEffect } from 'react';
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';
import {
  ExtensibleValues,
  useSearchExtensibleValuesLazyQuery,
} from '@generated/graphql';

import {
  TAutocompleteProps,
  TAutocompleteSearchResult,
} from '@customTypes/components';

const Autocomplete: React.FC<TAutocompleteProps> = ({
  defaultValue,
  field,
  callback,
  isInvalid,
  clear,
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
  const ref = React.createRef<AsyncTypeahead<ExtensibleValues>>();

  useEffect(() => {
    if (clear) ref?.current?.clear();
  }, [clear]);

  return (
    <AsyncTypeahead
      ref={ref}
      filterBy={() => true}
      id={`autocomplete-input-${field}`}
      onChange={(selected: TAutocompleteSearchResult[]) => {
        if (selected.length > 0) {
          callback(selected[0].value);
        }
      }}
      defaultInputValue={defaultValue || undefined}
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
