import { addOnemenu } from '../../models/menus';
import Navigate from '../Router/Navigate';

const addMenuPage = () => {
  const addmenu = `
    <div class="text-center">
      <h3>ADD A MENU</h3>
      <form class="px-5" method="post">
        <div class="mb-3">
          <label for="title">Enter title</label>
          <input class="form-control" type="text" name="title" id="title" required />
        </div>
        <div class="mb-3">
          <label for="type">Enter Type</label>
          <input class="form-control" type="text" name="type" id="type" required />
        </div>
        <div class="mb-3">
          <label for="description">Enter Description</label>
          <input class="form-control" type="text" name="description" id="description" required />
        </div>
        <div class="mb-3">
          <label for="price">Enter Price (number)</label>
          <input class="form-control" type="number" name="price" id="price" required />
        </div>
        <div class="mb-3">
          <label for="link">Enter link</label>
          <input class="form-control" type="url" name="link" id="link" required />
        </div>
        <input type="submit" class="btn btn-primary" value="Add Menu" />
      </form>
    </div>
  `;

  const main = document.querySelector("main");
  main.innerHTML = addmenu;

  const myForm = document.querySelector('form');

  myForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const type = document.querySelector('#type').value;
    const description = document.querySelector('#description').value;
    const price = Number(document.querySelector('#price').value);
    const link = document.querySelector('#link').value;

    const menuToBeCreated = { title, type, description, price, imagelink: link };

    try {
      await addOnemenu(menuToBeCreated);
      Navigate('/adminpage');
    } catch (err) {
      console.error('Error in addOnemenu:', err);
    }
  });
};

export default addMenuPage;
