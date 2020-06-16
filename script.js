
$("#date").text(moment().format("dddd, MMMM Do YYYY"));

$(document).ready(function () {
  console.log(`page loaded`);
  // Load from localstorage and populate input boxes with the corresponding valiues
  loadData();
  $(".user-text").on("click", function (event) {
    event.preventDefault();
    console.log("Click");
    console.log(`You clicked on save ${$(this)}`);
    saveInput();
  });
});

function loadData() {
  console.log("loadData()");
  if (localStorage.values) {
    var values = JSON.parse(localStorage.getItem("values"));
    // Populate the input boxes with the values in values
    let i = 0;
    $(".user-input").each(function () {
      $(this).val(values[i++]);
    });
  }
}

function saveInput() {
  var values = [];
  // Get all the input elements
  $(".user-input").each(function () {
    console.log($(this).val());
    // Place value into the values array in order
    values.push($(this).val());
  });
  // Save values into local storage
  localStorage.setItem("values", JSON.stringify(values));
}

