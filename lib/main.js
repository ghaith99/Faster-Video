var currentrunperiod = 0; //initialize
//start main
//on Keydown listener
function handle(e){

  //Debounce
  if(currentrunperiod >  Date.now) return; 
  currentrunperiod = Date.now()  + 1*(1000); //1sec

  if(!document.getElementsByTagName("video")[0].paused){ //err if vid paused and change

    if(e.keyCode == 107){
      document.getElementsByTagName("video")[0].playbackRate += 1;
      console.log("Speed changed to "+ document.getElementsByTagName("video")[0].playbackRate);
    }
    if(e.keyCode == 109){
      if(document.getElementsByTagName("video")[0].playbackRate != 1){
        document.getElementsByTagName("video")[0].playbackRate -= 1;
        console.log("Speed changed to "+ document.getElementsByTagName("video")[0].playbackRate);
      }
    }   
  }

}

window.addEventListener("keydown", handle, true);

//on Menu Click listener
//menu items, change labels in lib/main  
self.on("click", function (node, data) {

  if (data.endsWith('labelName')) {

    return;
  }
});
//End main

//menu
const cm = require("sdk/context-menu");
cm.Menu({
  label: "Video Speed",
  //contentScriptFile: require("sdk/self").data.url("manipulator.js"),
  items: [
  cm.Item({ label: "5X", data: "5X" }),
  cm.Item({ label: "3X", data: "3X" }),
  cm.Item({ label: "1X", data: "1X" }),
  cm.Item({ label: "0.5X", data: "0.5X" }),
  cm.Separator(),
  cm.Item({ label: "1.0+", data: "1" }),
  cm.Item({ label: "0.25+", data: "0.25" }),
  cm.Item({ label: "0.25-", data: "-0.25" }),
  cm.Item({ label: "1-", data: "-1.0" }),
  cm.Separator(),
  cm.Item({ label: "Lock", data: "lock" }),
  ],
  onMessage: function (args) {
    if(args.endsWith('X')) {
      this.label = "Playback Rate: " + args;
    }
    else {
      this.label = "Playback Rate";
    }
  }
});
