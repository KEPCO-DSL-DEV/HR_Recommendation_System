import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const SearchBoxBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchForm = styled.form`
border-radius: 4px;
overflow: hidden;
display: flex;
width: 400px;
border: 1px solid gray;
background : white;
button {
    outline: none;
    border: light;
    font-size: 1rem;
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    background: #D7D7D9
    color: white;
    font-weight: bold;
  }       
input {
    padding: 0.5rem;
    flex: 1;
}

`;

const SearchBox = () => {
  return (
    <SearchBoxBlock>
      <SearchForm>
        <input placeholder="보직을 선택해 주세요" />
        <Button type="submit">선택</Button>
      </SearchForm>
    </SearchBoxBlock>
  );
};

export default SearchBox;
