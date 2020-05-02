var timeStamp = document.querySelector("#currentDay");
var scheduleList = document.querySelector(".container");

// console.log(timeStamp);

var time = moment().format('LLLL');

// Time now in military 24 hr time
var timeNow = moment().format('kk');
console.log(timeNow);

$(timeStamp).text(time);


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

timeSlot = ["7AM ", "8AM ", "9AM ", "10AM ", "11AM ", "12PM ", "1PM ", "2PM ", "3PM ", "4PM ", "5PM "]

for (var i = 0; i < timeSlot.length; i++) {

    scheduleSlot = timeSlot[i];

    $(scheduleList).append("<li>");
    $("li").text(scheduleSlot);
    // 
    // $(scheduleList).text(scheduleSlot)



    // start at 7am and append each hour

    // $("li").text(hour);

    // conditional for the hours
    if (timeNow <= 12) {
        var period = "AM";
    }
    else {
        var period = "PM";
    }

}
console.log(scheduleList)
console.log(period);

