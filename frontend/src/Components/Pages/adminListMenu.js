import { readAllMenus, deleteOneMenu, updatePartiallyOneMenu } from '../../models/menus';

const ViewMenuPage = async () => {
  const main = document.querySelector('main');
  main.innerHTML = '<div id="menuWrapper"></div>';

  const menuWrapper = document.querySelector('#menuWrapper');

  const menus = await readAllMenus();
  const menusAsHtmlTable = getHtmlMenuTableAsString(menus);

  menuWrapper.innerHTML = menusAsHtmlTable;

  attachEventListeners();
};

function getHtmlMenuTableAsString(movies) {
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
    <th scope="col">ImageLink</th>  
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
      <td class="fw-bold text-info" contenteditable="true">${element.imageLink}</td>
    
        <button type="button" class="btn btn-info delete" data-element-id="${element.id}">Delete</button>
      </td>
      <td>
        <button type="button" class="btn btn-info update" data-element-id="${element.id}">Save</button>
      </td>
    </tr>
    `,
    )
    .join('')}
  </tbody></table>`;

  return htmlMenuTable;
}

function attachEventListeners() {
  const MenuWrapper = document.querySelector('#menuWrapper');

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
        title: menuRow.children[0].innerText,
        type: menuRow.children[1].innerText,
        description: menuRow.children[2].innerText,
        price: Number.parseInt(menuRow.children[3].innerText,10),
        imageLink: menuRow.children[4].innerText,
      };
      await updatePartiallyOneMenu(elementId, newMenumData);
      ViewMenuPage();
    });
  });
}

export default ViewMenuPage;