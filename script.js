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

// // List of schedule slots
timeSlot = ["07 AM", "08 AM ", "09 AM", "10 AM", "11 AM", "12 PM", "01 PM", "02 PM", "03 PM", "04 PM", "05 PM"]
timeLock = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

for (var i = 0; i < timeSlot.length; i++) {

    var scheduleSlot = timeSlot[i];
    var scheduleLock = timeLock[i];

    var divPrime = $("<div>");
    var divSub = $("<div>");
    var divSub2 = $("<div>");
    var newSpan = $("<span>");
    var newInput = $("<input>");
    var newButton = $("<button>");

    // Main append block
    $("#timeBlock").append(divPrime);
    $(divPrime).attr("class", "input-group").append(divSub).append(newInput).append(divSub2);
    // Attribute assignment block
    $(divSub).attr("class", "input-group-prepend").append(newSpan);
    $(newSpan).attr("class", "input-group-text").text(scheduleSlot);
    $(newInput).attr("type", "text").attr("class", "form-control alert-dark").attr("placeholder", "").attr("id", scheduleLock);
    $(divSub2).attr("class", "input-group-append").append(newButton);
    $(newButton).attr("class", "btn btn-outline-secondary").attr("type", "button").text("SAVE");

    // List attributes
    if (scheduleLock == timeNowin24) {
        $(newInput).attr("type", "text").attr("class", "form-control alert-success").attr("placeholder", "")
    }
    else if (scheduleLock > timeNowin24) {
        $(newInput).attr("type", "text").attr("class", "form-control alert-warning").attr("placeholder", "")
    };

};

// Variables for the button inputs

var gather = $("<form>").attr("id", "gatherInput");
var userInput = $("<input>").attr("id", "theTask").attr("placeholder", "What is your task?").attr("type", "text");
var save = $("<input>").attr("id", "save").attr("type", "submit").attr("value", "SAVE");

var task = { value: "" };

// var listID = document.getElementsByTagName("li");

$("div").on("click", function (e) {
    e.preventDefault();
    console.log(e);

    if (e.target.matches("#7AM")) {
        $(userInput).show()
        $(save).show();
        $(this).append(divColNext);
        $(divColNext).attr("class", "col-sm ")
        $(divColNext).append(gather)
        $(gather).append(userInput).append(save);
    }

    if (e.target.matches("#save")) {
        task.value = $("#theTask").val().trim();
        console.log(task.value);
        $(divColNext).text(task.value);
        // $(this).append(task);
        // localStorage.setItem("7AM", JSON.stringify(task.value));
        $(userInput).hide().empty();
        $(save).hide();
    }

    // if (time = "7AM") {
    //     var time = $("li:contains(7AM)");

    //     task.value = $("#theTask").val().trim();
    //     console.log(task.value);
    //     $(this).append(task);
    //     localStorage.setItem("7AM", JSON.stringify(task.value));
    //     $(userInput).hide().empty();
    //     $(save).hide();
    // }

    // if (e.target.$("li:contains(8AM)")) {
    //     task.value = $("#theTask").val().trim();
    //     console.log(task.value);

    //     localStorage.setItem("8AM", JSON.stringify(task.value));
    //     $(userInput).hide().empty();
    //     $(save).hide();
    // }

    // if (e.target.matches(".list-group-item") && $("li:contains(7AM)")) {
    //     $(this).append(divColNext);
    //     $(divColNext).attr("class", "col-sm ")
    //     $(divColNext).append(gather)
    //     $(gather).append(userInput).append(save);

    // }
    // if ($("li:contains(8AM)")) {
    //     localStorage.setItem("8AM", JSON.stringify(task.value));
    // }
    // if (e.target == $("#9")) {
    //     localStorage.setItem("9AM", JSON.stringify(task.value));
    // }
    // if (e.target == $("#10")) {
    //     localStorage.setItem("10AM", JSON.stringify(task.value));
    // }
    // if (e.target == $("#11")) {
    //     localStorage.setItem("11AM", JSON.stringify(task.value));
    // }
    // if (e.target == $("#12")) {
    //     localStorage.setItem("12AM", JSON.stringify(task.value));
    // }
    // if (e.target == $("#1")) {
    //     localStorage.setItem("1PM", JSON.stringify(task.value));
    // }
    // if (e.target == $("#2")) {
    //     localStorage.setItem("2PM", JSON.stringify(task.value));
    // }
    // if (e.target == $("#3")) {
    //     localStorage.setItem("3PM", JSON.stringify(task.value));
    // }
    // if (e.target == $("#4")) {
    //     localStorage.setItem("4PM", JSON.stringify(task.value));
    // }
    // if (e.target == $("#5")) {
    //     localStorage.setItem("5PM", JSON.stringify(task.value));
    // }


});


// Testing logs
// console.log(timeNowin24);
// console.log(timeNowin12);
// console.log(scheduleSlot);
// console.log($(".container"))
// console.log(period);

