// conditional for the hours // put in a function later
if (timeNowin24 <= 12) {
    var period = "AM";
}
else {
    var period = "PM";
}

// console.log(timeStamp);

var time = moment().format('LLLL');

// Time now in 24 hr format
// var timeNowin24 = moment().format('k');
// Time now in 12 hr format
var timeNowin12 = moment().format('h');
var timeNowin24 = 9;
console.log(timeNowin24);
console.log(timeNowin12);

$("#currentDay").text(time);


// Build list of schedule slots
timeSlot = ["7AM", "8AM ", "9AM", "10AM", "11AM", "12PM", "1PM ", "2PM ", "3PM ", "4PM ", "5PM "]
timeLock = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

for (var i = 0; i < timeSlot.length; i++) {

    var scheduleSlot = timeSlot[i];
    var scheduleLock = timeLock[i];
    var li = $("<li>");
    var save = $("<button>");

    // When clicked then it becomes an input
    var enterTask = $("<input>");
    $(enterTask).attr("class", "form-control").attr("id", scheduleLock);

    $(li).attr("class", "list-group-item list-group-item-dark").attr("id", scheduleLock)
    // $(li).attr("id", scheduleLock).attr("placeholder", "Recipient's username");

    $(li).text(scheduleSlot);

    if (scheduleLock === timeNowin24) {
        $(li).attr("class", "list-group-item list-group-item-success")
    }
    else if (scheduleLock > timeNowin24) {
        $(li).attr("class", "list-group-item list-group-item-warning")
    };

    $(save).attr("class", "btn btn-info").text("SAVE");

    $("#schedule").append(li);
    $(li).append(enterTask).append(save);




    // if ($("id") === timeNowin12) {
    //     // make the list green?
    //     $(".time").attr("class", "alert alert-success")
    // }
};
console.log(scheduleSlot);
// console.log($(".container"))
// console.log(period);

