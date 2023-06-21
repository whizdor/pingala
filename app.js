var day_schedule;
var flag = 0;
getSchedule();

setInterval(sendNotif, 1000*10);
setInterval(reset_flag,1000*60*60);


function getSchedule() {
  var cur = new Date();
  var day = cur.getDay();
  // var day = 2;

  if (day == 1) {
    chrome.storage.local.get("M", callback);
    function callback(result) {
      day_schedule = result.M;
    }
  }
  else if (day == 2) {
    console.log('tue');
    chrome.storage.local.get("T", callback);
    function callback(result) {
      day_schedule = result.T;
    }
  }
  else if (day == 3) {
    chrome.storage.local.get("W", callback);
    function callback(result) {
      day_schedule = result.W;
    }
  }
  else if (day == 4) {
    chrome.storage.local.get("Th", callback);
    function callback(result) {
      day_schedule = result.Th;
    }
  }
  else if (day == 5) {
    chrome.storage.local.get("F", callback);
    function callback(result) {
      day_schedule = result.F;
    }
  }
}

function sendNotif() {
  var cur = new Date();
  var hours =  cur.getHours();
  hours = 3;
  var mins =  cur.getMinutes();
  mins = 2;
  var length = day_schedule.length;
  var i;
  for (i = 0; i < length; i++) {
    if (hours == parseInt(day_schedule[i][0][0].substring(0,2)) && flag <= 1 && mins <= 3) 
    {
      console.log(String(day_schedule[i][0][1]));
      chrome.runtime.sendMessage('', {
        type: 'notification',
        options: {
          title: 'Reminder',
          message: String(day_schedule[i][0][1]),
          iconUrl: '/icon.png',
          type: 'basic'
        }
      });
      flag++;
    }
  }
  
}

function reset_flag()
{
  flag = 0;
}