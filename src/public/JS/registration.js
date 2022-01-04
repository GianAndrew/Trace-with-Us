// Code line 2-9 is for the 'Suffix input box hover' | *Omitted*
$(function () {
  $(document).tooltip();
});
s;

function showNote() {
  document.getElementById("note1").style.display = block;
}

// The showDiv(select) function lets the input field (1st & 2nd dose) appear when a vaccine is selected
function showDiv(select) {
  if (select.value >= 2) {
    document.getElementById("dose-div").style.display = "flex";
    document.getElementById("sDiv").style.display = "block";
  } else if (select.value == 1) {
    document.getElementById("dose-div").style.display = "flex";
    document.getElementById("sDiv").style.display = "none";
  } else {
    document.getElementById("dose-div").style.display = "none";
  }
}
