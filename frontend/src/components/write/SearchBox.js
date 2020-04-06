import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const SearchBoxBlock = styled.div`
width: 100%
border-top: 1px solid gray;
padding-top: 2rem;
display: center;
h4 {
    color: gray;
    margin-top: 0;
    margin-bottom: 0.5rem;
}
`;

const SearchForm = styled.form`
border-radius: 4px;
overflow: hidden;
display: flex;
width: 256px;
border: 1px solid gray;
input,
button {
    outline: none;
    border: none;
    font-size: 1rem;
}

input {
    padding: 0.5rem;
    flex: 1;
}
button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: gray
    color: white;
    font-weight: bold;
    &:hover {
        background: lightgray;
    }
}
`;

const Search = styled.div`
  margin-right: 0.5 rem;
  color: gray;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const SearchListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const SearchItem = React.memo(({ search }) => <Search>#{search}</Search>);

const SearchList = React.memo(({ searchs }) => (
  <SearchListBlock>
    {searchs.map(search => (
      <SearchItem key={search} search={search} />
    ))}
  </SearchListBlock>
));

const SearchBox = () => {
  return (
    <SearchBoxBlock>
      <h4>보직 선택</h4>
      <SearchForm>
        <input placeholder="보직을 선택해 주세요" />
        <button type="submit">선택</button>
      </SearchForm>
      <SearchList searchs={['사무', '배전', '송변전', 'ICT']} />
    </SearchBoxBlock>
  );
};

export default SearchBox;
