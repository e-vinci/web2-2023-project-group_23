import { getAuthenticatedUser, isAuthenticated} from '../../utils/auths';
import {userinformation,readAllUsers,deleteOneUser} from '../../models/profils';
import Navigate from '../Router/Navigate';

const ViewUserPage = async () => {
  if(!isAuthenticated()){
    Navigate('/');
    return;
  }
  const authenticatedUser = getAuthenticatedUser();
  const infos = await userinformation(authenticatedUser?.username);
  if(!infos.isAdmin){
    Navigate('/');
    return;
  }
  const main = document.querySelector('main');
  main.innerHTML = '<div id="userList"></div>';

  const listUser = document.querySelector('#userList');

  const user = await readAllUsers();
  const UserAsHtmlTable = getHtmlMenuTableAsString(user);

  listUser.innerHTML = UserAsHtmlTable;

  attachEventListeners(); 

};


function getHtmlMenuTableAsString(users) {
  if (!users || users.length === 0) {
    return '<p class="p-5">No users yet : (</p>';
  }

  const htmlUserTable = `<div class="table-responsive p-5">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Adress</th>
        <th scope="col">Phone</th>
        <th scope="col">IS Admin</th>
       
        <th> Actions</th>
      </tr>
    </thead>
    <tbody>  
      ${users
        .map(
          (element) => `
            <tr>
              <td class="fw-bold text-info" contenteditable="true">${element.id}</td>
              <td class="fw-bold text-info" contenteditable="true">${element.username}</td>
              <td class="fw-bold text-info" contenteditable="true">${element.email}</td>
              <td class="fw-bold text-info" contenteditable="true">${element.adresse}</td>
              <td class="fw-bold text-info" contenteditable="true">${element.phone}</td>
              <td class="fw-bold text-info" contenteditable="true">${element.isAdmin}</td>
              
              
              <td>
                ${!element.isAdmin ? 
                  `<button type="button" class="btn btn-info delete" data-element-id="${element.id}">Delete</button>`
                  : '' 
                }
              </td>
            </tr>
          `,
        )
        .join('')}
    </tbody>
  </table>
</div>`;

  return htmlUserTable; 
}

function attachEventListeners() {
  const menuWrapper = document.querySelector('#userList');

  menuWrapper.querySelectorAll('.delete').forEach((button) => {
    button.addEventListener('click', async (e) => {
      const { elementId } = e.target.dataset;
      await deleteOneUser(elementId);
      ViewUserPage();
    });
  });
}


export default ViewUserPage;