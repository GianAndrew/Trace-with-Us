/* For General and Overall Scripts */

$(document).ready(function(){
    // For Side Navbar Appearance
    $("#navMenu").click(function(){
        $(".subMenu").css({"transform": "translateX(0%)"});
    });

    // For Side Navbar Disappearance
    $("#navSubMenu").click(function(){
        $(".subMenu").css({"transform": "translateX(-100%)"});
    });

    // For Light and Dark Mode Function
    $("#Dark_LightMode").click(function(){
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            $("body").css("background-image", "url('/SRC/Background_dark.png')");
            $(this).text("Light Mode");
        } else {
            $("body").css("background-image", "url('/SRC/Background_light.png')")
            $(this).text("Dark Mode");
        }
    });
});

// For the Date and Time in Side Navbar to function properly.
function updateClock() {
    // Declaration of new variables
    var now = new Date();
    var dName = now.getDay(),
        month = now.getMonth(),
        dNum = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        amPM = "AM";

    // Prevents the clock to have a 24 hours format.
    if (hour >= 12){
        hour = hour - 12;
        amPM = "PM"
    }

    // For Resetting the time to 12 am if it restarts from 0 am
    if (hour == 0) {
        hour = 12;
    }

    Number.prototype.pad = function(digits){
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    // Declaration of other array variables
    var months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var ids = ["DayName", "Month", "DayNum", "Year", "Hour", "Minutes", "Seconds", "amPM"];
    var values = [week[dName], months[month], dNum.pad(2), year, hour.pad(2), min.pad(2), sec.pad(2), amPM];

    // For setting and initializing values to the different id or elements for the time to function properly
    for (var i = 0; i <ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

// An "onload" function which is declared inside the body tag/element in the html file
function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
} 