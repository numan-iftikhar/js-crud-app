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


// Delete Data
document.querySelector("#student-list").addEventListener("click", (e)=>{
  target = e.target;
  
  if (target.classList.contains('delete')) {
    target.parentElement.parentElement.remove()
    showAlert("Data Deleted Successfully", "danger")
  }
})