// This code is for showing the follow up question for Question #4 in the contact tracing form if the user answered "Yes"
function hNS1(x) {
  if (x == 0) {
    document.getElementById("hideAndShow1").style.display = "block";
  } else {
    document.getElementById("hideAndShow1").style.display = "none";
    return;
  }
}

// This code is for showing the follow up question for Question #5 in the contact tracing form if the user answered "Yes"
function hNS2(y) {
  if (y == 0) {
    document.getElementById("hideAndShow2").style.display = "block";
  } else {
    document.getElementById("hideAndShow2").style.display = "none";
    return;
  }
}
