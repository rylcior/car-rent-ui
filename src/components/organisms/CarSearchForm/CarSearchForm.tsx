import {
  DatePickerElement,
  FormContainer,
  SelectElement,
  TimePickerElement,
} from 'react-hook-form-mui';
import Button from '../../atoms/Button/Button';
import type CarSearch from '../../../types/carSearch';
import { Grid } from '@mui/material';

interface CarSearchFormProps {
  offices: any[];
}

const CarSearchForm = (props: CarSearchFormProps) => {
  const { offices } = props;

  const defaultValues = {
    office: '',
    dateFrom: new Date(),
    timeFrom: new Date(),
    dateTo: new Date(),
    timeTo: new Date(),
  };

  const onSubmit = (data: CarSearch) => {
    console.log(data);
  };

  const getOfficesOptions = (): Array<{ id: string; label: string }> =>
    offices.map((office) => {
      return { id: office.id, label: office.name };
    });

  return (
    <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SelectElement
            name={'office'}
            label={'Lokalizacja'}
            options={getOfficesOptions()}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <DatePickerElement
            name={'dateFrom'}
            label={'Data wypożyczenia'}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TimePickerElement
            name={'timeFrom'}
            label={'Godzina wypożyczenia'}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <DatePickerElement name={'dateTo'} label={'Data zwrotu'} required />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TimePickerElement
            name={'timeTo'}
            label={'Godzina zwrotu'}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1}>
          <Button label={'Szukaj'} onClick={() => {}} />
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default CarSearchForm;
