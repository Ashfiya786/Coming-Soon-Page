$(document).ready(function() {
  let clock;
  // Grab the current date
  let timeNow = new Date();
  // Target future date/24 hour time/Timezone
  let deadline = moment.tz("2023-03-01 23:59", "Africa/Lagos");
  // Calculate the difference in seconds between the future and current date
  let diff = deadline / 1000 - timeNow.getTime() / 1000;
  // Countdown timer
  clock = $("#countTim").FlipClock(diff, {
    clockFace: "DailyCounter",
    countdown: true,
    callbacks: {
      stop: function() {
        console.log("Launching in a moment");
      }
    }
  });   
});