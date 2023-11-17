import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import loginpage from '../Pages/LoginPage';
import NewPage from '../Pages/NewPage';
import ContactPage from '../Pages/contactPage';


const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/loginpage' : loginpage,
  '/contactpage' : ContactPage
};

export default routes;
