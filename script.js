
// console.log(timeStamp);

var time = moment().format('LLLL');

// Time now in 24 hr format
var timeNowin24 = moment().format('k');
// Time now in 12 hr format
var timeNowin12 = moment().format('h');
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

// conditional for the hours // put in a function later
if (timeNowin24 <= 12) {
    var period = "AM";
}
else {
    var period = "PM";
}

// Build list of schedule slots
timeSlot = ["7AM ", "8AM ", "9AM ", "10AM ", "11AM ", "12PM ", "1PM ", "2PM ", "3PM ", "4PM ", "5PM "]

for (var i = 0; i < timeSlot.length; i++) {


    var setID = "#id=" + timeSlot[i];
    var scheduleSlot = timeSlot[i];
    var li = $("<li>");
    console.log(scheduleSlot);

    $(li).text(scheduleSlot);
    $(".container").append(li);


    if ($("id") === timeNowin12) {
        // make the list green?
        $(".time").attr("class", "alert alert-success")
    }
};
// console.log($(".container"))
// console.log(period);

