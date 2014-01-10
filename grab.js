API.on(API.CHAT, callback);
function callback(data) {
  if (data.message.indexOf('.') === 0) {
    var msg = data.message;
    var fromID = data.fromID;
    var myID = API.getUser().id;
    var command = msg.substring(1).split(' ');

    if (typeof command[2] != "undefined"){
      for (var i = 2; i<command.length; i++){
        command[1] = command[1] + ' ' + command[i];
      }
    }

    var playlist = command[1];
    if (playlist > 0) {
      playlist = playlist - 1;
    }
    else {
      playlist = 0;
    }

    if (fromID == myID) {
      switch (command[0].toLowerCase()) {
        case "grab":
          $(".icon-curate").click();
          $($(".curate").children(".menu").children().children()[playlist]).mousedown();
          break;
      }
    }
  }
}
