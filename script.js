// Conditional for the hours to determine AM or PM 
if (timeNowin24 <= 12) {
    var period = "AM";
}
else {
    var period = "PM";
}

// The current day and time
var time = moment().format('LLLL');
$("#currentDay").text(time);

// Time now in 12 hr format
var timeNowin12 = moment().format('h');

// Time now in 24 hr format
var timeNowin24 = moment().format('k');

// Test variable
// var timeNowin24 = 9;
console.log(timeNowin24);
// console.log(timeNowin12);

// List of schedule slots
timeSlot = ["7AM", "8AM ", "9AM", "10AM", "11AM", "12PM", "1PM ", "2PM ", "3PM ", "4PM ", "5PM "]
timeLock = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

for (var i = 0; i < timeSlot.length; i++) {

    var scheduleSlot = timeSlot[i];
    var scheduleLock = timeLock[i];
    var li = $("<li>");
    var input = $("<input>").attr("id", "task");
    var save = $("<button>").attr("id", "save");
    $(save).text("SAVE");

    // List attributes
    $(li).attr("class", "text-left list-group-item list-group-item-action list-group-item-dark border border-dark").attr("id", scheduleLock)
    $(li).text(scheduleSlot + " ");
    // $(li).append(input).append(save);

    if (scheduleLock == timeNowin24) {
        $(li).attr("class", "text-left list-group-item list-group-item-action list-group-item-success border border-dark")
    }
    else if (scheduleLock > timeNowin24) {
        $(li).attr("class", "text-left list-group-item list-group-item-action list-group-item-warning border border-dark")
    };
    $("#schedule").append(li);

};

// var inPlace = $("<input>")
// var inSave = $("<button>")
// $("#input").append(inPlace);
// $("#save").append(inSave);
// $(inSave).text("SAVE");

// $("#list").on("click", function () {
//     function listIt() {
//         $(this).append("<span>");
//         $("span").attr("id", "task");
//         $("#task").append(input).append(save);
//     };
//     listIt()
// });

$("li").on("click", function (e) {
    e.preventDefault();
    console.log(e)
    if (e.target.matches(".list-group-item")) {
        $(this).append(input).append(save);
    };

});


// $("li").on("click", function (e) {
//     e.preventDefault();
//     console.log(e);
//     input.show();
//     save.show();
// });

console.log(scheduleSlot);
// console.log($(".container"))
// console.log(period);

