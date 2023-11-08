const taskText = document.getElementById('taskText');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskValue = taskText.value.trim();
  if (taskValue !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskValue;
    taskItem.classList.add('task-item');
    taskItem.addEventListener('click', () => {
      taskItem.remove();
    });
    taskList.appendChild(taskItem);
    taskText.value = '';
  }
}










