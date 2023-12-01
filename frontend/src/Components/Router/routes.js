
import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import loginpage from '../Pages/LoginPage';
import NewPage from '../Pages/NewPage';
import ContactPage from '../Pages/contactPage';
import profilepage from '../Pages/Profilepage';


const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/loginpage' : loginpage,
  '/contactpage' : ContactPage,
  '/profilepage' : profilepage,
};

export default routes;
