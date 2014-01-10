var Countrybot = {};
Countrybot.misc = {};
Countrybot.misc.version = "1.0.22";

API.on(API.CHAT, function(data){
  if(data.message.indexOf(',') === 0){
    var msg = data.message, from = data.from, fromID = data.fromID;
    var command = msg.substring(1).split(' ');
    if(typeof command[2] != "undefined"){
      for(var i = 2; i<command.length; i++){
        command[1] = command[1] + ' ' + command[i];
      }
    }
      switch(command[0].toLowerCase()){
        case "add":
            if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                $(".icon-curate").click();
                $($(".curate").children(".menu").children().children()[0]).mousedown();
              }
              break;

        case "test":
          if(Countrybot.admins.indexOf(fromID) > -1){
            API.sendChat("@"+ data.from +" Test Successful");
          }else{
            API.sendChat("This command requires bAAnjo only!");
          }
          break;
      }
  }
});


API.sendChat('bAAnjoBOT Grab Script v'+ Countrybot.misc.version +' Reporting for duty!')
