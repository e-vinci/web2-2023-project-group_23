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

  const htmlMenuTable = `<div class="table-responsive p-5">
  <table class="table">
<thead>
  <tr>
    <th scope="col">Id</th>
    <th scope="col">Title</th>
    <th scope="col">Type</th>
    <th scope="col">Description</th>
    <th scope="col">Price</th>  
    <th> ACTIONS </th>
  </tr>
</thead>
<tbody>  
  ${menus
    .map(
      (element) => `
    <tr>
      <td class="fw-bold text-info" contenteditable="true">${element.id}</td>
      <td class="fw-bold text-info" contenteditable="true">${element.title}</td>
      <td class="fw-bold text-info" contenteditable="true">${element.type}</td>
      <td class="fw-bold text-info" contenteditable="true">${element.description}</td>
      <td class="fw-bold text-info" contenteditable="true">${element.price}</td>
    
    <td>
        <button type="button" class="btn btn-info delete" data-element-id="${element.id}">Delete</button>
      </td>
      <td>
        <button type="button" class="btn btn-info update" data-element-id="${element.id}">Save</button>
      </td>
    </tr>
    
    `,
    )
    .join('')}
  </tbody></table>
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