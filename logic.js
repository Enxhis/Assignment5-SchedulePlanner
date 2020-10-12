$(document).ready(function () {
    // listener for save button clicks
    $(".saveBtn").on("click", function () {
        // gets values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // saves value in localStorage
        localStorage.setItem(time, value);
    });

    // function that updates hour
    function updateHour() {
        // get current number of hours
        var currentHour = moment().hours();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            // check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
            } //check if current time
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } // or if time is in the future
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    // call updateHour function
    updateHour();
    // // set up interval to check if current time needs to be updated
    // var interval = setInterval(updateHour, 15000);


    // set data for the header of the schedule
    function setHeaderData() {
        var currentHDate = moment().format('dddd, MMMM Do');
        $("#currentDay").text(currentHDate);
    }
    // call of headerData function
    setHeaderData();

    // load any saved data from localStorage and display them in the planner
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
