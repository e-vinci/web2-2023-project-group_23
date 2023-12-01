
import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import signUpPage from '../Pages/Signup';
import NewPage from '../Pages/NewPage';
import ContactPage from '../Pages/contactPage';
import profilepage from '../Pages/Profilepage';
import signInPage from '../Pages/SigninPage';


const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/signuppage' : signUpPage,
  '/contactpage' : ContactPage,
  '/profilepage' : profilepage,
  '/signinpage' : signInPage,
};

export default routes;
