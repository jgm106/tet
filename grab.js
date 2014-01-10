/*
 * personal bookmarklet to grab a song on plug.dj
 *
 * add a bookmark with the location of
 *    javascript:(function(){$.getScript('https://raw.github.com/jgm106/tet/master/grab.js');}());
 *
 *    All hail The Country Club. bAAnjo!
 */

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

    switch (command[0].toLowerCase()) {
      case "grab":
        if (fromID == myID) {
          $(".icon-curate").click();
          $($(".curate").children(".menu").children().children()[playlist]).mousedown();
        }
        break;

      case "grabhelp":
        API.sendChat("[.grab or .grab 0 or .grab 1] puts song in first playlist. [.grab #] puts song in playlist number #.");
        break;

      case "grabdebug":
        API.sendChat("fromID: " + fromID + "  myID: " + myID);
        break;
    }
  }
}
