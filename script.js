var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function() {

  var time = new Date().getHours();
  var lolcat = document.getElementById('lolcat');
  var message = document.getElementById("timeEvent");
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"; //default image

  if (time == partyTime){
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
  } else if (time == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
  } else if (time == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
  } else if (time == wakeupTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
  } else if (time < noon) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Good morning!";
  } else if (time > evening) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
  } else {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good afternoon!";
  }

  message.innerText = messageText;
  console.log(messageText);
  lolcat.src = image;
  
  showCurrentTime();
  
};

var showCurrentTime = function() {
  
  var clock = document.getElementById('clock');
  
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";
  
  if (hours >= noon) {
    meridian = "PM";
  }
  
  if (hours > noon) {
    hours = hours - 12;
  }
  
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
  
  clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);


var partyEvent = function() {
  
  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "PARTY OVER";
    partyTimeButton.style.backgroundColor = "#32CD32";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "PARTY TIME!";
    partyTimeButton.style.backgroundColor = "#222";
  }
};


var wakeUpEvent = function() {
  wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
  lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
  napTime = napTimeSelector.value;
};


partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
