import { addOnemenu } from '../../models/menus';
import Navigate from '../Router/Navigate';
import { getAuthenticatedUser, isAuthenticated } from '../../utils/auths';
import {userinformation} from '../../models/profils';

const addMenuPage = async () => {
  if(!isAuthenticated()){
    Navigate('/');
    return;
  }
  const authenticatedUser = getAuthenticatedUser();
  const infos = await userinformation(authenticatedUser.username);
  if(!infos.isAdmin){
    Navigate('/');
    return;
  }
  const addmenu = `
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h3 class="text-center mb-4">ADD A MENU</h3>
            <form method="post" class="px-4">

              <div class="mb-3" style="margin-bottom: 15px;">
                <label for="title" class="form-label" style="font-size: 18px;">Enter Title</label>
                <input type="text" class="form-control" id="title" name="title" style="font-size: 16px; padding-bottom: 10px;" required>
              </div>

              <div class="mb-3" style="margin-bottom: 15px;">
                <label for="type" class="form-label" style="font-size: 18px;">Enter Type</label>
                <input type="text" class="form-control" id="type" name="type" style="font-size: 16px; padding-bottom: 10px;" required>
              </div>

              <div class="mb-3" style="margin-bottom: 15px;">
                <label for="description" class="form-label" style="font-size: 18px;">Enter Description</label>
                <input type="text" class="form-control" id="description" name="description" style="font-size: 16px; padding-bottom: 10px;" required>
              </div>

              <div class="mb-3" style="margin-bottom: 15px;">
                <label for="price" class="form-label" style="font-size: 18px;">Enter Price (number)</label>
                <input type="number" class="form-control mb-2" id="price" name="price" style="font-size: 16px; padding-bottom: 10px;" required>
              </div>

              <div class="mb-3" style="margin-bottom: 15px;">
                <label for="link" class="form-label" style="font-size: 18px;">Enter Link</label>
                <input type="url" class="form-control" id="link" name="link" style="font-size: 16px; padding-bottom: 10px;" required>
              </div>

              <div class="d-grid">
                <button type="submit" class="btn btn-primary" style="font-size: 18px;">Add Menu</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
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
