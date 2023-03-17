import { Box } from '@mui/material';
import CarSearchForm from '../CarSearchForm/CarSearchForm';
import { useEffect, useState } from 'react';
import { getOffices } from '../../../api/offices';

const SearchBar = () => {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    getOffices().then((response) => {
      setOffices(response.data.result);
    });
  }, []);

  return (
    <Box>
      <CarSearchForm offices={offices} />
    </Box>
  );
};

export default SearchBar;
