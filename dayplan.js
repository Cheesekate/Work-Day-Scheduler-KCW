$("#currentDay").append(moment().format("dddd, MMMM Do, YYYY"));

const currentTime = parseInt(moment().format("HH00"), 10);

$(document).ready(render());

$(".saveButton").on("click", function (e) {
    e.preventDefault();
    var val = $(this)
        .siblings(".description")
        .val();
    var hour = $(this)
        .siblings(".description")
        .attr("id");
    notes[hour] = val;

    localStorage.setItem("notes", JSON.stringify(notes));
});

function render() {
    for (let i = 0; i < 24; i++) {
        const oneEvent = localStorage.getItem(i);
        $("#" + i).text(oneEvent);
    }
}



// function changeTime(hour, id) {
//     if (currentHours > hour) {
//         $(id).addClass("past");
//         $(id).removeClass("future");
//     } else if (currentHours === hour) {
//         $(id).removeClass("future");
//         $(id).addClass("present");
//     }
// }

// changeClass(7, "#sevenAm");
// changeClass(8, "#eightAm");
// changeClass(9, "#nineAm");
// changeClass(10, "#tenAm");
// changeClass(11, "#elevenAm");
// changeClass(12, "#twelevePm");
// changeClass(13, "#onePm");
// changeClass(14, "#twoPm");
// changeClass(15, "#threePm"); 
// changeClass(16, "#fourPm");
// changeClass(17, "#fivePm");
// changeClass(18, "#sixPm");
// changeClass(19, "#sevenPm");
// changeClass(20, "#eightPm");
// changeClass(21, "#ninePm");
// changeClass(22, "#tenPm");
// changeClass(23, "#elevenPm");
// changeClass(24, "#mid");
// changeClass(1, "#oneAm");
// changeClass(2, "#twoAm");
// changeClass(3, "#threeAm");
// changeClass(4, "#fourAm");
// changeClass(5, "#fiveAm");
// changeClass(6, "#sixAm");

// $("#sevenAm").val(localStorage.getItem("7"));
// $("#eightAm").val(localStorage.getItem("8"));
// $("#nineAm").val(localStorage.getItem("9"));
// $("#tenAm").val(localStorage.getItem("11"));
// $("#elevenAm").val(localStorage.getItem("12"));
// $("twelevePm").val(localStorage.getItem("13"));
// $("#onePm").val(localStorage.getItem("13"));
// $("#twoPm").val(localStorage.getItem("14"));
// $("#threePm").val(localStorage.getItem("15"));
// $("#fourPm").val(localStorage.getItem("16"));
// $("#fivePm").val(localStorage.getItem("17"));
// $("#sixPm").val(localStorage.getItem("18"));
// $("#sevenPm").val(localStorage.getItem("19"));
// $("#eightPm").val(localStorage.getItem("20"));
// $("#ninePm").val(localStorage.getItem("21"));
// $("#tenPm").val(localStorage.getItem("22"));
// $("#elevenAm").val(localStorage.getItem("23"));
// $("#mid").val(localStorage.getItem("24"));
// $("#oneAm").val(localStorage.getItem("1"));
// $("#twoAm").val(localStorage.getItem("2"));
// $("#threeAm").val(localStorage.getItem("3"));
// $("#fourAm").val(localStorage.getItem("4"));
// $("#fiveAm").val(localStorage.getItem("5"));
// $("#sixAm").val(localStorage.getItem("6"));



