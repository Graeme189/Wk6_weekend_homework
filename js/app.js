document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
newItemform.addEventListener('submit', handleNewItemFormSubmit);

const deleteAllButton = document.querySelector('#delete-all');
deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const instrumentListItem = createInstrumentListItem(event.target);
  const instrumentList = document.querySelector('#instrument-list');
  instrumentList.appendChild(instrumentListItem);

  event.target.reset();
}

const createInstrumentListItem = function (form) {
  const instrumentListItem = document.createElement('li');
  instrumentListItem.classList.add('instrumentListItem');

  const model = document.createElement('h2');
  model.textContent = form.model.value;
  instrumentListItem.appendChild(model);

  const category =  document.createElement('h2')
  category.textContent = form.category.value;
  instrumentListItem.appendChild(category);

  const colour = document.createElement('h3');
  colour.textContent = form.colour.value;
  instrumentListItem.appendChild(colour);

  const purchaseDate = document.createElement('h3')
  purchaseDate.textContent = form.purchaseDate.value;
  instrumentListItem.appendChild(purchaseDate);

  return instrumentListItem;
}

const handleDeleteAllClick = function (event) {
  const instrumentList = document.querySelector('#instrument-list');
  instrumentList.innerHTML = '';
}
