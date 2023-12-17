import { getAuthenticatedUser } from '../utils/auths';



const userinformation = async(username)=>{
    try {
        const options = {
          method: 'POST',
          body: JSON.stringify({username}),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch('/api/auths/username', options);
        const user = await response.json();
        return user;
      } catch (err) {
        console.error('user::error: ', err);
        throw err;
      }
    };

  const getMenuByid  = async(id)=>{
      try{
        const response = await fetch(`/api/menus/${id}`);
        const menu = await response.json();
        return menu;
      }catch (err) {
        console.error('user::error: ', err);
        throw err;
      }
      
    }

    
const addOnemenutofavourites = async (username, menuId) => {
  const user = getAuthenticatedUser();
  if (!user || !user.username) {
      console.error('Nom d\'utilisateur manquant');
      return; // ou gérer l'erreur d'une autre manière
    }
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({ username: user.username, menuId}),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch('/api/auths/addMenuLike', options);
    const menulike = await response.json();

    // eslint-disable-next-line consistent-return
    return menulike;
  } catch (err) {
    console.error('addOneMenu::error: ', err);
    throw err;
  }
};

const readAllUsers = async()=>{
  try {
    const response = await fetch('/api/auths');
    const users = await response.json();
    return users;
  } catch (err) {
    console.error('readAllUsers::error: ', err);
    throw err;
  }
};
const deleteOneUser = async (id) => {
  try {
    const user = getAuthenticatedUser();
    if (!user || !user.token) {
      console.error('Token manquant');
      // Gérez l'erreur d'une manière appropriée, peut-être en redirigeant vers la page de connexion.
      return;
    }

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user.token,
      },
    };
    const response = await fetch(`/api/auths/${id}`, options);
    const deleteduser= await response.json();
    // eslint-disable-next-line consistent-return
    return deleteduser;
  } catch (err) {
    console.error('deleteOneUser::error: ', err);
    throw err;
  }
};



  

    export {userinformation, getMenuByid, addOnemenutofavourites,readAllUsers,deleteOneUser};