import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<SearchPage />} />)
);

export default router;
