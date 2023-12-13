import readAllMenus from '../../models/menus';

const AdminPage = async () => {
  const infos = await readAllMenus();
  const items = infos;
  let page = `<div class="PageAdminCss">
  <h2>Les Menus</h2>`;

  page += `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
          <th>Supprimer</th>
          <th>Modifier</th>
        </tr>
      </thead>
      <tbody>
  `;

  items.forEach(element => {

    page += `
      <tr class="Admin">
        <td>${element.type}</td>
        <td>${element.title}</td>
        <td>${element.description}
        <td>${element.price}€</td>
        <td>
        <img src="${element.imagelink}" alt=""></td>
        <td>
          <a href="#">Supprimer</a>
        </td>
        <td>
          <a href="#">Modifier</a>
        </td>
      </tr>
    `;
  });

  page += `
      </tbody>
    </table>
    <div class="FormulaireList">
    <form id="menuForm">
    <h2>Rajouter un Menu</h2>

    <label for="type">Type:</label>
    <input type="text" id="type" name="type" required>

    <label for="title">Title:</label>
    <input type="text" id="title" name="title" required>

    <label for="description">Description:</label>
    <textarea id="description" name="description" required></textarea>

    <label for="price">Price:</label>
    <input type="number" id="price" name="price" required>

    <label for="image">Image URL (optional):</label>
    <input type="text" id="image" name="image">

    <button type="button" onclick="addMenu()">Ajouter Menu</button>
  </form>
  </div>
  `;

  const main = document.querySelector('main');
  main.innerHTML = page;
};

export default AdminPage ;