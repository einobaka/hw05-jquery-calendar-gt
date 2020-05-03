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
var timeNowin24 = moment().format('k');
// Time now in 12 hr format
// var timeNowin12 = moment().format('h');
var timeNowin12 = 7;
console.log(timeNowin24);
console.log(timeNowin12);

$("#currentDay").text(time);


// Add a list with a time block from 8am to 5pm
timeEvents = {

    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",

};



// Build list of schedule slots
timeSlot = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5]

for (var i = 0; i < timeSlot.length; i++) {

    var scheduleSlot = timeSlot[i];
    var li = $("<li>");
    $(li).attr("class", "list-group-item list-group-item-dark")
    $(li).attr("id", scheduleSlot);
    if (scheduleSlot === timeNowin12) {
        $(li).attr("class", "list-group-item list-group-item-success")
    }
    else if (scheduleSlot > timeNowin12) {
        $(li).attr("class", "list-group-item list-group-item-warning")
    };

    $(li).text(scheduleSlot);
    $(".container").append(li);



    // if ($("id") === timeNowin12) {
    //     // make the list green?
    //     $(".time").attr("class", "alert alert-success")
    // }
};
console.log(scheduleSlot);
// console.log($(".container"))
// console.log(period);

