
    const input = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const clearBtn = document.getElementById('clearBtn');
    const list = document.getElementById('todoList');
 
    addBtn.addEventListener('click', () => {
      const text = input.value.trim();
      if (text !== '') {
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
        input.value = ''; // Clear input
      }
    });
 
    clearBtn.addEventListener('click', () => {
      list.innerHTML = ''; // Simple way to remove all <li> items
    });
