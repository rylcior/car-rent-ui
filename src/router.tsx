import { createBrowserRouter } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />,
  },
  {
    path: 'search-result',
    element: <SearchResultPage />,
  },
]);

export default router;
