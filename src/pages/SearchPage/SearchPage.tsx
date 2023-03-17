import NavBarTemplate from '../../components/templates/NavBarTemplate/NavBarTemplate';
import { Box } from '@mui/material';
import SearchBar from '../../components/organisms/SearchBar/SearchBar';

const SearchPage = () => {
  return (
    <NavBarTemplate>
      <Box>
        <SearchBar />
      </Box>
    </NavBarTemplate>
  );
};

export default SearchPage;
