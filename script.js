//your code here!

// script.js

const list = document.getElementById("infi-list");
let itemCount = 1;

// function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount++}`;
    list.appendChild(li);
  }
}

// add 10 items initially
addItems(10);

// add 2 more when scrolled to bottom
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
