const create = document.getElementById('create');
const inputField = document.getElementById('tinput');
let tasks = 0;

create.addEventListener('click', function() {
  const tinput = inputField.value;
  if (tasks < 5) {
    if (tinput.trim() !== '') {
      // Limit the input to 18 characters
      const limitedInput = tinput.slice(0, 28);

      if (tinput.length > 18) {
        alert('Max characters is 18 characters.');
      }

      const task = document.createElement('div');
      const taskk = document.createElement('p');
      const removeIcon = document.createElement('i'); // Create the icon element

      // Task style
      task.style.marginTop = "80px";
      task.style.display = "block";
      task.style.width = "280px";
      task.style.height = "30px";
      task.style.border = '1px solid white';
      task.style.borderRadius = "3px";
      task.style.margin = "10px 0px";
      task.style.padding = "0px 10px";
      task.style.position = "relative";
      task.style.left = "50%";
      task.style.transform = 'translate(-50%)';

      taskk.style.padding = "8px 0px"
      taskk.style.fontFamily = "'Comfortaa', cursive";
      taskk.style.fontSize = "15px";

      taskk.textContent = limitedInput;

      // Icon style (using Font Awesome)
      removeIcon.className = 'fas fa-times-circle';
      removeIcon.style.position = 'absolute';
      removeIcon.style.right = '10px';
      removeIcon.style.top = '50%';
      removeIcon.style.transform = 'translateY(-50%)';
      removeIcon.style.cursor = 'pointer';

      removeIcon.addEventListener('click', function() {
        task.remove();
        tasks--;
      });

      const container = document.getElementById('container');

      task.appendChild(removeIcon); // Add the icon to the task div first
      task.appendChild(taskk); // Then, add the paragraph to the task div
      container.appendChild(task);
      tasks++;
    } else {
      alert('The input area is empty try to write your task !');
    }
  } else {
    alert('Max number of tasks is 5 !');
  }

  // Clear the input field for the next entry
  inputField.value = '';
});

inputField.addEventListener('input', function() {
  if (inputField.value.length > 28) {
    inputField.value = inputField.value.slice(0, 28);
  }
});
