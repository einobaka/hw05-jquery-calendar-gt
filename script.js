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

// Test variable for when real time is not in sync to demo the list color coordination
// var timeNowin24 = 9;

// List of schedule slots
timeSlot = ["7AM", "8AM ", "9AM", "10AM", "11AM", "12PM", "1PM ", "2PM ", "3PM ", "4PM ", "5PM "]
timeLock = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

for (var i = 0; i < timeSlot.length; i++) {

    var scheduleSlot = timeSlot[i];
    var scheduleLock = timeLock[i];
    var li = $("<li>");
    var divCol = $("<div>");
    var divColNext = $("<div>");

    // List attributes
    $(li).attr("class", "row text-left list-group-item list-group-item-action list-group-item-dark border border-dark").attr("id", scheduleLock)
    $(li).append(divCol);
    $(divCol).attr("class", "col-sm").text(scheduleSlot);
    // $(li).append(input).append(save);

    if (scheduleLock == timeNowin24) {
        $(li).attr("class", "row text-left list-group-item list-group-item-action list-group-item-success border border-dark")
    }
    else if (scheduleLock > timeNowin24) {
        $(li).attr("class", "row text-left list-group-item list-group-item-action list-group-item-warning border border-dark")
    };
    $("#schedule").append(li);

};

// Variables for the button inputs

var gather = $("<form>").attr("id", "notsure");
var userInput = $("<input>").attr("id", "theTask").attr("placeholder", "What is your task?").attr("type", "text");
var save = $("<input>").attr("id", "save").attr("type", "submit").attr("value", "SAVE");

function showTask(){
    localStorage.setItem("userTask", JSON.stringify(taskValue));
};


$("li").on("click", function (e) {
    e.preventDefault();
    // console.log(e);

    if (e.target.matches(".list-group-item")) {

        $(this).append(divColNext);
        $(divColNext).attr("class", "col-sm ")
        $(divColNext).append(gather)
        $(gather).append(userInput).append(save);
    }
    if (e.target.matches("#save")) {
        var taskValue = $("#theTask").val().trim();
        console.log(taskValue);

        //     $(input).hide();
        //     $(save).hide();
       
    };

});



// Testing logs
// console.log(timeNowin24);
// console.log(timeNowin12);
// console.log(scheduleSlot);
// console.log($(".container"))
// console.log(period);

