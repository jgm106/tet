API.on(API.CHAT, callback);
function callback(data) {
  if(data.message.indexOf(',') === 0) {
    var msg = data.message;
    var fromID = data.fromID;
    var command = msg.substring(1).split(' ');
    if(typeof command[2] != "undefined"){
      for(var i = 2; i<command.length; i++){
        command[1] = command[1] + ' ' + command[i];
      }
    }
    if(API.getUser(fromID) == API.getUser()) {
      switch(command[0].toLowerCase()){
        case "grab":
          $(".icon-curate").click();
          $($(".curate").children(".menu").children().children()[command[1]]).mousedown();
          break;
      }
    }
  }
}
