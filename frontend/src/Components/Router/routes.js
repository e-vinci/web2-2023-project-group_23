
import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import signUpPage from '../Pages/Signup';
import NewPage from '../Pages/NewPage';
import ContactPage from '../Pages/contactPage';
import profilepage from '../Pages/Profilepage';
import signInPage from '../Pages/SigninPage';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import CartPage from '../Pages/cartpage';
import PaymentPage from '../Pages/PaymenPage';
import Logout from '../logout';
import ProductPage from '../Pages/productpage';
import ViewMenuPage from '../Pages/adminListMenu';
import addMenuPage from '../Pages/addMenupage';
import ViewUserPage from '../Pages/adminListUser';
import AnimationPage from '../Pages/animation';


const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/signuppage' : signUpPage,
  '/contactpage' : ContactPage,
  '/profilepage' : profilepage,
  '/signinpage' : signInPage,
  '/privaypolicy' : PrivacyPolicy,
  '/cart' : CartPage,
  '/payment' : PaymentPage,
  '/logout' : Logout,
  '/productpage' : ProductPage,
  '/adminpage': ViewMenuPage,
  '/addmenu' : addMenuPage,
  '/adminListUser' : ViewUserPage,
  '/animation' : AnimationPage,
 
};

export default routes;
