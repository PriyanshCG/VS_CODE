 const input = document.getElementById("itemInput");
    const addBtn = document.getElementById("addItemBtn");
    const list = document.getElementById("todoList");

    addBtn.addEventListener("click", () => {
      const text = input.value.trim();
      if (text !== "") {
        const li = document.createElement("li"); // create new list item
        li.textContent = text; // set text from input
        list.appendChild(li); // append new <li> to ul
        input.value = ""; // clear input field
      }
    });
