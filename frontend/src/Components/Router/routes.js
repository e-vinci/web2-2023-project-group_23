
import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import signUpPage from '../Pages/Signup';
import NewPage from '../Pages/NewPage';
import ContactPage from '../Pages/contactPage';
import profilepage from '../Pages/Profilepage';
import signInPage from '../Pages/SigninPage';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';


const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/signuppage' : signUpPage,
  '/contactpage' : ContactPage,
  '/profilepage' : profilepage,
  '/signinpage' : signInPage,
  '/privaypolicy' : PrivacyPolicy,
};

export default routes;
