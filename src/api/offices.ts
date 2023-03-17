import { instance } from './config';

export const getOffices = async () => {
  return await instance.get('/offices');
};
