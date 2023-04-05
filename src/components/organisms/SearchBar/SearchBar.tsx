import { Paper } from '@mui/material';
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
    <Paper elevation={3} sx={{ px: 5, py: 3, borderRadius: '25px' }}>
      <CarSearchForm offices={offices} />
    </Paper>
  );
};

export default SearchBar;
