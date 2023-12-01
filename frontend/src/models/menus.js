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


 export default readAllMenus;