// Code line 2-9 is for the 'Suffix input box hover' | *Omitted*
$(function () {
  $(document).tooltip();
});
s;


// The showDiv(select) function lets the input field (1st & 2nd dose) appear when a vaccine is selected
function showDiv(select) {
  if (select.value) {
    document.getElementById("vaccineBox").style.display = "block";
  } if (select.value === 'None') {
    document.getElementById("vaccineBox").style.display = "none";
  }
}
