import { Button as Btn } from '@mui/material';
interface ButtonProps {
  label: string;
  onClick?: () => void;
}
const Button = (props: ButtonProps) => {
  const { label, onClick } = props;

  return (
    <Btn variant="contained" color="primary" onClick={onClick}>
      {label}
    </Btn>
  );
};

export default Button;
