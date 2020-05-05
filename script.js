// The current day and time
var time = moment().format('LLLL');
$("#currentDay").text(time);

// Time now in 12 hr format
var timeNowin12 = moment().format('h');

// Time now in 24 hr format
var timeNowin24 = moment().format('k');
// console.log(timeNowin24);

// Test variable for when real time is not in sync to demo the list color coordination
// var timeNowin24 = 11;

// Array of schedule slots to be used for IDs
timeSlot = ["07 AM", "08 AM ", "09 AM", "10 AM", "11 AM", "12 PM", "01 PM", "02 PM", "03 PM", "04 PM", "05 PM"]
timeLock = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
timeInput = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",]

// Creation of HTML elements
for (var i = 0; i < timeSlot.length; i++) {

    var scheduleSlot = timeSlot[i];
    var scheduleLock = timeLock[i];
    var scheduleInput = timeInput[i];

    var divPrime = $("<div>");
    var divSub = $("<div>");
    var divSub2 = $("<div>");
    var newSpan = $("<span>");
    var newInput = $("<input>");
    var newButton = $("<button>");

    // Main append block
    $("#schedule").append(divPrime);
    $(divPrime).attr("class", "input-group").append(divSub).append(newInput).append(divSub2);
    // Attribute assignment block
    $(divSub).attr("class", "input-group-prepend").append(newSpan);
    $(newSpan).attr("class", "input-group-text").text(scheduleSlot);
    $(newInput).attr("type", "text").attr("class", "form-control alert-dark").attr("placeholder", "").attr("id", scheduleLock);
    $(divSub2).attr("class", "input-group-append").append(newButton);
    $(newButton).attr("class", "btn btn-outline-secondary").attr("type", "button").text("SAVE").attr("id", scheduleInput);

    // List attributes
    if (scheduleLock == timeNowin24) {
        $(newInput).attr("type", "text").attr("class", "form-control alert-success").attr("placeholder", "")
    }
    else if (scheduleLock > timeNowin24) {
        $(newInput).attr("type", "text").attr("class", "form-control alert-warning").attr("placeholder", "")
    };

};

// Task object storage
var tasks = {
    at7: "",
    at8: "",
    at9: "",
    at10: "",
    at11: "",
    at12: "",
    at13: "",
    at14: "",
    at15: "",
    at16: "",
    at17: "",
};

// Save click event delegation and data storage
$(".btn").on("click", function (e) {

    if (e.target.matches("#a")) {
        tasks.at7 = $("#7").val().trim();
        localStorage.setItem("7AM", JSON.stringify(tasks.at7));
    }
    if (e.target.matches("#b")) {
        tasks.at8 = $("#8").val();
        localStorage.setItem("8AM", JSON.stringify(tasks.at8));
    }
    if (e.target.matches("#c")) {
        tasks.at9 = $("#9").val();
        localStorage.setItem("9AM", JSON.stringify(tasks.at9));
    }
    if (e.target.matches("#d")) {
        tasks.at10 = $("#10").val();
        localStorage.setItem("10AM", JSON.stringify(tasks.at10));
    }
    if (e.target.matches("#e")) {
        tasks.at11 = $("#11").val();
        localStorage.setItem("11AM", JSON.stringify(tasks.at11));
    }
    if (e.target.matches("#f")) {
        tasks.at12 = $("#12").val();
        localStorage.setItem("12PM", JSON.stringify(tasks.at12));
    }
    if (e.target.matches("#g")) {
        tasks.at13 = $("#13").val();
        localStorage.setItem("1PM", JSON.stringify(tasks.at13));
    }
    if (e.target.matches("#h")) {
        tasks.at14 = $("#14").val();
        localStorage.setItem("2PM", JSON.stringify(tasks.at14));
    }
    if (e.target.matches("#i")) {
        tasks.at15 = $("#15").val();
        localStorage.setItem("3PM", JSON.stringify(tasks.at15));
    }
    if (e.target.matches("#j")) {
        tasks.at16 = $("#16").val();
        localStorage.setItem("4PM", JSON.stringify(tasks.at16));
    }
    if (e.target.matches("#k")) {
        tasks.at17 = $("#17").val();
        localStorage.setItem("5PM", JSON.stringify(tasks.at17));
    }

});

// Function for pushing data from local storage
function getSchedule() {

    if (tasks.at7 === "") {
        tasks.at7 = JSON.parse(localStorage.getItem("7AM"));
        $("#7").attr("placeholder", tasks.at7)
    }
    if (tasks.at8 === "") {
        tasks.at8 = JSON.parse(localStorage.getItem("8AM"));
        $("#8").attr("placeholder", tasks.at8)
    }
    if (tasks.at9 === "") {
        tasks.at9 = JSON.parse(localStorage.getItem("9AM"));
        $("#9").attr("placeholder", tasks.at9)
    }
    if (tasks.at10 === "") {
        tasks.at10 = JSON.parse(localStorage.getItem("10AM"));
        $("#10").attr("placeholder", tasks.at10)
    }
    if (tasks.at11 === "") {
        tasks.at11 = JSON.parse(localStorage.getItem("11AM"));
        $("#11").attr("placeholder", tasks.at11)
    }
    if (tasks.at12 === "") {
        tasks.at12 = JSON.parse(localStorage.getItem("12PM"));
        $("#12").attr("placeholder", tasks.at12)
    }
    if (tasks.at13 === "") {
        tasks.at13 = JSON.parse(localStorage.getItem("1PM"));
        $("#13").attr("placeholder", tasks.at13)
    }
    if (tasks.at14 === "") {
        tasks.at14 = JSON.parse(localStorage.getItem("2PM"));
        $("#14").attr("placeholder", tasks.at14)
    }
    if (tasks.at15 === "") {
        tasks.at15 = JSON.parse(localStorage.getItem("3PM"));
        $("#15").attr("placeholder", tasks.at15)
    }
    if (tasks.at16 === "") {
        tasks.at16 = JSON.parse(localStorage.getItem("4PM"));
        $("#16").attr("placeholder", tasks.at16)
    }
    if (tasks.at17 === "") {
        tasks.at17 = JSON.parse(localStorage.getItem("5PM"));
        $("#17").attr("placeholder", tasks.at17)
    }

};
getSchedule();

        // For later deveopment -- for loop all the button handling
        // $(".btn").on("click", function (e) {
        //     for (var i = 0; i < 18; i++) {

        //         var scheduleSlot = timeSlot[i];
        //         var scheduleLock = timeLock[i];
        //         var scheduleInput = timeInput[i];
        //         var scheduleTasks = tasks[i];

        //         if (e.target.matches(timeInput[i])) {
        //             scheduleTasks = $(scheduleLock).val().trim();
        //             localStorage.setItem("7AM", JSON.stringify(tasks.at7));

        //         };

        //     };
        // });


