import { getAuthenticatedUser } from '../utils/auths';

const authenticatedUser = getAuthenticatedUser();

const readAllMenus = async () => {
    try {
      const res = await fetch('/api/menus');
      const menus = await res.json();
      return menus;
    } catch (err) {
      console.error('readAllMovies::error: ', err);
      throw err;
    }
  };

  const addOnemenu = async (menu) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(menu),
        headers: {
          'Content-Type': 'application/json',
          Authorization: authenticatedUser.token,
        },
      };
  
      const response = await fetch('/api/menus', options);
      const createdMenu = await response.json();
      return createdMenu;
    } catch (err) {
      console.error('addOneMovie::error: ', err);
      throw err;
    }
  };


  const deleteOneMenu = async (id) => {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authenticatedUser.token,
        },
      };
      const response = await fetch(`/api/menus/${id}`, options);
      const deletedmenu= await response.json();
      return deletedmenu;
    } catch (err) {
      console.error('deleteOneMovie::error: ', err);
      throw err;
    }
  };

  const updateOneMenu  = async (id, newMenuData) => {
    try {
      const options = {
        method: 'PATCH',
        body: JSON.stringify(newMenuData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: authenticatedUser.token,
        },
      };
  
      const response = await fetch(`/api/menus/${id}`, options);
  
      const updatedMenu = await response.json();
  
      return updatedMenu;
    } catch (err) {
      console.error('updateOneMovie::error: ', err);
      throw err;
    }
  };


  
 export {readAllMenus, addOnemenu, deleteOneMenu, updateOneMenu };