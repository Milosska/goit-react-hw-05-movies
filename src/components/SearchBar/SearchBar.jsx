import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Button } from './SearchBar.styled';

export const SearchBar = ({ handleSubmit, setSearchParams }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchState = e => {
    const currentQuery = e.target.value.trim();
    setSearchValue(currentQuery);
    setSearchParams(currentQuery !== '' ? { query: currentQuery } : {});
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Button type="submit">
        <Icon />
      </Button>
      <Input
        type="text"
        name="query"
        value={searchValue}
        placeholder="Find your movie"
        onChange={handleSearchState}
      />
    </Form>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
