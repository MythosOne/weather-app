import { ImSearch, ImPlus } from 'react-icons/im';
import {SearchBarForm} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <>
      <SearchBarForm>
        <button type="submit">
          <ImSearch size={14} />
        </button>
        <input
          name="inputData"
          //   value={}
          // onChange={}
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Search for a city"
        />
        <button type="onClick">
          <ImPlus size={14} />
        </button>
      </SearchBarForm>
    </>
  );
};
