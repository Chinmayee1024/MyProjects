let todoList = [
  {
    item: 'React and Redux',
    dueDate: '8/10/2024'
  },
  {
    item: 'Portfolio',
    dueDate: '8/10/2024'
  },
  {
    item: 'Myntra Clone',
    dueDate: '8/10/2024'
  },
  {
    item: 'Git and GitHub',
    dueDate: '8/10/2024'
  }
];
displayItems();
function addTodo() {
  let inputElement = document.querySelector('#todoInput');
  let dateElement = document.querySelector('#todoDate');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}
function displayItems() {
  let containerElement = document.querySelector('.todoContainer');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i]
    newHtml += `
    <span>${item}</span> 
    <span>${dueDate}</span> 
    <button class="deleteBtn" onclick="todoList.splice(${i},1);displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}; 