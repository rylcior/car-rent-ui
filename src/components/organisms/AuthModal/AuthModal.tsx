import Modal from '../../molecules/Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';

interface AuthModalProps {
  isRegistration: boolean;
  isOpen: boolean;
  handleClose: () => void;
}
const AuthModal = (props: AuthModalProps) => {
  const { isRegistration, isOpen, handleClose } = props;

  return (
    <Modal
      title={isRegistration ? 'Rejestracja' : 'Logowanie'}
      open={isOpen}
      handleClose={handleClose}
    >
      {isRegistration ? <RegistrationForm /> : <LoginForm />}
    </Modal>
  );
};

export default AuthModal;
