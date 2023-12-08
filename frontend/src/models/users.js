 const usersignup = async (informationuser) => {
    try {
        const options = {
          method: 'POST',
          body: JSON.stringify(informationuser),
          headers: {
            'Content-Type': 'application/json',
          },
        };
    
        const response = await fetch('/api/auths/register', options);

        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    
        const authenticatedUser = await response.json();
    
        return authenticatedUser;
      } catch (err) {
        console.error('addUser::error: ', err);
        throw err;
      }
    };

 export default usersignup; 
 