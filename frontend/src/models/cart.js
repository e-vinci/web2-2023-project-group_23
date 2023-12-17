
import { getAuthenticatedUser} from '../utils/auths';

const readcarteFromUsername = async(username)=>{
    try {
        const options = {
          method: 'POST',
          body: JSON.stringify({username}),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch('/api/cart/readcarteFromUsername', options);
        const cart = await response.json();
        return cart;
      } catch (err) {
        console.error('user::error: ', err);
        throw err;
      }
    };


    const addtopanier = async(username, idmenu)=>{

        const user = getAuthenticatedUser();
        if (!user || !user.username) {
            console.error('Nom d\'utilisateur manquant');
            return; // ou gérer l'erreur d'une autre manière
          }

        try {
            const options = {
              method: 'POST',
              body: JSON.stringify({ username: user.username, idmenu}),
              headers: {
                'Content-Type': 'application/json',
              },
            };
            const response = await fetch('/api/cart/addMenuToPanier', options);
            const cart = await response.json();
            // eslint-disable-next-line consistent-return
            return cart;
            
          } catch (err) {
            console.error('user::error: ', err);
            throw err;
          }
        };
    
        // eslint-disable-next-line no-unused-vars
        const deleteCart = async (username) => {
          const user = getAuthenticatedUser();
          if (!user || !user.username) {
            console.error('Nom d\'utilisateur manquant');
            return; // ou gérer l'erreur d'une autre manière
          }
          try {
            const options = {
              method: 'DELETE',
              body: JSON.stringify({ username: user.username }),
              headers: {
                'Content-Type': 'application/json',
              },
            };
            const response = await fetch(`/api/cart/deletepaniertotal`, options);
            const deletedcart= await response.json();
            // eslint-disable-next-line consistent-return
            return deletedcart;
          } catch (err) {
            console.error('deletecart::error: ', err);
            throw err;
          }
        };

    


    export {readcarteFromUsername, addtopanier, deleteCart};