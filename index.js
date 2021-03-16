let users = [];
const tableContainer = document.getElementById("table-container");
window.onload = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    users = data;
    const table = document.createElement("table");
    table.classList.add("table", "table-dark", "my-5");
    tableContainer.appendChild(table);
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const tr = document.createElement("tr");
    thead.appendChild(tr);
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    th1.innerText = "ID";
    th2.innerText = "Name";
    th3.innerText = "Username";
    th4.innerText = "Email";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    users.forEach((user, index) => {
      const tbodyRow = document.createElement("tr");
      tbodyRow.setAttribute("id", index);
      tbody.appendChild(tbodyRow);
      const tr1 = document.createElement("td");
      const tr2 = document.createElement("td");
      const tr3 = document.createElement("td");
      const tr4 = document.createElement("td");
      tbodyRow.appendChild(tr1);
      tbodyRow.appendChild(tr2);
      tbodyRow.appendChild(tr3);
      tbodyRow.appendChild(tr4);
      tr1.innerText = user.id;
      tr2.innerText = user.name;
      tr3.innerText = user.username;
      tr4.innerText = user.email;
    });
  });

const searchField = document.getElementById("search-field");
const selectDropdown = document.getElementById("select-dropdown");
const submitButton = document.getElementById("submit-button");
submitButton.onclick = renderResults;

function getSelectedDropdown() {
  return selectDropdown.value;
}

function handleSearchField() {
  return searchField.value;
}
function renderResults(event, selectValue = getSelectedDropdown(), searchValue = handleSearchField()) {
  let filtered = users.map((user) => {
    if (user[selectValue].toLowerCase().includes(searchValue)) {
      console.log(user[selectValue]);
      return user[selectValue];
    }
  });
}
