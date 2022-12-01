let selectedRow = null;

// Show Alert
function showAlert(msg, color) {
  // Create alert div
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${color}`;

  alertDiv.appendChild(document.createTextNode(msg));
  document
    .querySelector(".container")
    .insertBefore(alertDiv, document.querySelector(".main"));

  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}

// Add Data
document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const rollNo = document.querySelector("#roll-no").value;

  // Validate Data
  if (firstName === "" || lastName === "" || rollNo === "") {
    showAlert("Please! Fill the form first!!", "warning");
  } else {
    if (selectedRow === null) {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");

      row.innerHTML = `
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${rollNo}</td>
          <td>
             <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
             <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
          </td>
        `;

      // Add new row to table
      list.appendChild(row);
      selectedRow = null;
      showAlert("Student Added Successfully", "success");
    } else {
      selectedRow.children[0].textContent = firstName;
      selectedRow.children[1].textContent = lastName;
      selectedRow.children[2].textContent = rollNo;
    }

    clearAllFields();
  }
});

// Edit Data
document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#first-name").value =
      selectedRow.children[0].textContent;
    document.querySelector("#last-name").value =
      selectedRow.children[1].textContent;
    document.querySelector("#roll-no").value =
      selectedRow.children[2].textContent;
  }
});

// Clear all fields
function clearAllFields() {
  document.querySelector("#first-name").value = "";
  document.querySelector("#last-name").value = "";
  document.querySelector("#roll-no").value = "";
}

// Delete Data
document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;

  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Data Deleted Successfully", "danger");
  }
});
