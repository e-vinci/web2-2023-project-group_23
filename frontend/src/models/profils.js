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

    export {userinformation, getMenuByid};