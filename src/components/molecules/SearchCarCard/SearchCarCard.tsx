import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Button from '../../atoms/Button/Button';

interface SearchCarCardProps {
  title: string;
  image: string;
  details: Array<{ label: string; value: string }>;
  carId: number;
  price: number;
}
const SearchCarCard = (props: SearchCarCardProps) => {
  const { title, image, details, carId, price } = props;
  return (
    <Card
      sx={{
        display: 'flex',
        py: 3,
        px: 4,
        alignContent: 'center',
        borderRadius: '20px',
        maxHeight: '140px',
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: '200px' }}
        image={image}
        alt={`car ${title} - ${carId}`}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h4">{title}</Typography>
        <Grid xs={12}>
          <Box component="ul" sx={{ pl: 2, display: 'flex', flexWrap: 'wrap' }}>
            {details.map((detail) => (
              <Grid item component="li" lg={4} sm={12}>
                {detail.label}: {detail.value}
              </Grid>
            ))}
          </Box>
        </Grid>
      </CardContent>

      <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography>{price} zł / dzień</Typography>
        <Box sx={{ mt: 4 }}>
          <Button label="Szczegóły" />
        </Box>
      </CardActions>
    </Card>
  );
};

export default SearchCarCard;
