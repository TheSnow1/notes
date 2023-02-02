let template = `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Название</h5>
    <h6 class="card-subtitle mb-2 text-muted">Категория</h6>
    <p class="card-text">Содержание</p>
  </div>
  <div class="card-footer text-muted">
    Дата
  </div>
</div>
`;

let saveButton = document.querySelector(`#save`);
let textInput = document.querySelector(`#text`);
let titleInput = document.querySelector(`#title`);
let categoryInput = document.querySelector(`#category`);
let dateInput = document.querySelector(`#date`);
let notesNode = document.querySelector(`#notes`);

saveButton.addEventListener(`click`, function() {
  let title = titleInput.value;
  let category = categoryInput.value;
  let text = textInput.value;
  let date = dateInput.value;

  template = `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${category}</h6>
    <p class="card-text">${text}</p>
  </div>
  <div class="card-footer text-muted">
    ${date}
  </div>
</div>`;

  notesNode.innerHTML += template;

  titleInput.value = ``;
  textInput.value = ``;
  dateInput.value = ``;
  categoryeInput.value = ``;

});