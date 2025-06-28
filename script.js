function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.getElementById("taskList");
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => removeTask(index);
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
  }
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

window.onload = function () {
  loadTasks();
  renderProducts();
};

const products = [
  { name: "Smartphone", price: 999, rating: 4.5 },
  { name: "Laptop", price: 1599, rating: 4.7 },
  { name: "Tablet", price: 499, rating: 4.3 },
  { name: "Smartwatch", price: 299, rating: 4.1 }
];

function renderProducts() {
  const sortBy = document.getElementById("sort").value;
  let sortedProducts = [...products];

  if (sortBy === "price") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  const container = document.getElementById("productContainer");
  container.innerHTML = '';
  sortedProducts.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<strong>${p.name}</strong><br>Price: $${p.price}<br>Rating: ⭐ ${p.rating}`;
    container.appendChild(div);
  });
}
