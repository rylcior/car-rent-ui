import NavBarTemplate from '../../components/templates/NavBarTemplate/NavBarTemplate';
import { Grid } from '@mui/material';
import SearchBar from '../../components/organisms/SearchBar/SearchBar';
import SearchCarCard from '../../components/molecules/SearchCarCard/SearchCarCard';

const SearchResultPage = () => {
  const cars = [];

  return (
    <NavBarTemplate>
      <SearchBar />
      <Grid container sx={{ mt: 3 }}>
        {cars.map((car) => (
          <Grid item sm={12}>
            <SearchCarCard
              title={car.title}
              image={car.image}
              details={car.details}
              carId={car.carId}
              price={car.price}
            />
          </Grid>
        ))}
      </Grid>
    </NavBarTemplate>
  );
};

export default SearchResultPage;
