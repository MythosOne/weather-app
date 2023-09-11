import { ImSearch, ImPlus } from 'react-icons/im';
import { SearchBarForm, Container,ButtonSearch, ButtonAdd, Input} from './SearchBar.styled';

export const SearchBar = () => {
  return (
    <Container>
      <SearchBarForm>
        <ButtonSearch type="submit">
          <ImSearch size={18} />
        </ButtonSearch>
        <Input
          name="inputData"
          //   value={}
          // onChange={}
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Search for a city"
        />
        <ButtonAdd type="onClick">
          <ImPlus size={18} />
        </ButtonAdd>
      </SearchBarForm>
    </Container>
  );
};
