import { FormControl, MenuItem, Select } from '@mui/material';

interface Option {
  label: string;
  value: number;
}

interface SelectInputProps {
  value: string;
  handleChange: () => void;
  label: string;
  options: Option[];
}

const SelectInput = (props: SelectInputProps) => {
  const { value, handleChange, label, options } = props;

  return (
    <FormControl>
      <Select value={value} onChange={handleChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
