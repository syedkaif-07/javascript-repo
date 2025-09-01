const todoList = [];
function addToDo() {
  let inputText = document.querySelector('.js-name-input');
  todoList.push(inputText.value);
  inputText.value = '';
  displayText(); 
}
function displayText() {
  let content = '';
  for (let i = 0; i < todoList.length; i++) {
    content += `
      <p>
        ${todoList[i]} 
        <button onclick="deleteItem(${i})">Delete</button>
        <button onclick="editItem(${i})">Edit</button>
      </p>
    `; 

    
  }
  document.querySelector('.js-text').innerHTML = `${content}`; 
}

function deleteItem(index) {
  todoList.splice(index, 1);
  displayText();
}

function editItem(index) {
  const newText = prompt("Edit your item:", todoList[index]);
  if (newText !== null) {
    todoList[index] = newText;
    displayText();
  }
}