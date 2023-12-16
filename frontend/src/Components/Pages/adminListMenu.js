import { readAllMenus, deleteOneMenu,  updateOneMenu  } from '../../models/menus';
import { getAuthenticatedUser, isAuthenticated} from '../../utils/auths';
import {userinformation} from '../../models/profils';
import Navigate from '../Router/Navigate';

const ViewMenuPage = async () => {
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
  main.innerHTML = '<div id="menuWrapper"></div>';

  const menuWrapper = document.querySelector('#menuWrapper');

  const menus = await readAllMenus();
  const menusAsHtmlTable = getHtmlMenuTableAsString(menus);

  menuWrapper.innerHTML = menusAsHtmlTable;

  attachEventListeners(); 
   // Ajoutez les liens d'administration
};


function getHtmlMenuTableAsString(menus) {
  if (menus?.length === undefined || menus.length === 0) {
    return '<p class="p-5">No menu yet : (</p>';
  }

  const htmlMenuTable = `
  <div class="container mt-5 mb-5">
    <h1 class="text-center">Welcome</h1>
    <div class="table-responsive p-5">
      <table class="table table-bordered border-secondary rounded">
        <thead class="bg-primary text-light">
          <tr>
            <th scope="col" style="font-size: 20px; width: 140px; text-align: center;">Id</th>
            <th scope="col" style="font-size: 18px; text-align: center;">Title</th>
            <th scope="col" style="font-size: 18px; text-align: center;">Type</th>
            <th scope="col" style="font-size: 18px; text-align: center;">Description</th>
            <th scope="col" style="font-size: 18px; text-align: center;">Price</th>
            <th scope="col" style="font-size: 18px; text-align: center;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${menus.map((element) => `
            <tr>
              <td class="fw-bold text-black" style="font-size: 18px; text-align: center; padding: 10px;" contenteditable="true">${element.id}</td>
              <td class="fw-bold text-black" style="font-size: 16px; text-align: center; padding: 10px;" contenteditable="true">${element.title}</td>
              <td class="fw-bold text-black" style="font-size: 16px; text-align: center; padding: 10px;" contenteditable="true">${element.type}</td>
              <td class="fw-bold text-success" style="font-size: 16px; text-align: center; padding: 10px;" contenteditable="true">${element.description}</td>
              <td class="fw-bold text-black" style="font-size: 16px; text-align: center; padding: 10px;" contenteditable="true">${element.price}</td>
              <td style="text-align: center;">
                <button type="button" class="btn btn-danger btn-sm" style="font-size: 14px;" data-element-id="${element.id}">Delete</button>
                <button type="button" class="btn btn-success btn-sm" style="font-size: 14px;" data-element-id="${element.id}">Save</button>
              </td>
            </tr>`
          ).join('')}
        </tbody>
      </table>
    </div>
  </div>
`;

return htmlMenuTable;

}

function attachEventListeners() {
  const menuWrapper = document.querySelector('#menuWrapper');

  menuWrapper.querySelectorAll('.delete').forEach((button) => {
    button.addEventListener('click', async (e) => {
      const { elementId } = e.target.dataset;
      await deleteOneMenu(elementId);
      ViewMenuPage();
    });
  });
 

  menuWrapper.querySelectorAll('.update').forEach((button) => {
    button.addEventListener('click', async (e) => {
      const { elementId } = e.target.dataset;
      const menuRow = e.target.parentElement.parentElement;
      const newMenumData = {
        title: menuRow.children[1].innerText,
        type: menuRow.children[2].innerText,
        description: menuRow.children[3].innerText,
        price: Number.parseInt(menuRow.children[4].innerHTML,10),
      };
      console.log('Element ID:', elementId);
      console.log('New Menu Data:', newMenumData);
      await updateOneMenu(elementId, newMenumData);
      ViewMenuPage();
    });
  });

}


export default ViewMenuPage;