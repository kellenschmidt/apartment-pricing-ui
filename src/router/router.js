import createRouter from './createRouter';
import prepareRepoPage from '../data/RepoPage.data';
import prepareUserPage from '../data/UserPage.data';

const { Router, Link } = createRouter([{
  match: '/users/',
  loadData: prepareUserPage,
  loadCode: () => import('../components/UserPage'),
}, {
  match: '/repos/',
  loadData: prepareRepoPage,
  loadCode: () => import('../components/RepoPage'),
}]);

export { Router, Link };
