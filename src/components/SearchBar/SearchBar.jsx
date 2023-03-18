import { useState } from 'react';
import { Form, Input, Icon, Button } from './SearchBar.styled';

export const SearchBar = ({ handleSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchState = e => {
    setSearchValue(e.target.value.trim());
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
