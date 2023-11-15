import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import loginpage from '../Pages/LoginPage';
import NewPage from '../Pages/NewPage';


const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/loginpage' : loginpage
};

export default routes;
