var currentrunperiod = 0; //initialize
var video = document.getElementsByTagName("video")[0];
var running = true;
//start main
//on Keydown listener
function handle(e){

  if(currentrunperiod >  Date.now) return;
  currentrunperiod = Date.now()  + 1*(1000); //1sec

  if(!video.paused){ //err if vid paused and change

    if(e.keyCode == 107){
      video.playbackRate += 1;
      console.log("Speed changed to "+ video.playbackRate);
    }
     if(e.keyCode == 32 ){ //fix firefox youtube player resume after pause, fix : simulate J: seek back 3sec
        running = false;
    }
     if(running == false){ //fix firefox youtube player resume after pause, fix : simulate J: seek back 3sec
      running = true;
      video.currentTime = video.currentTime ;
      //console.log("video.currentTime = video.currentTime >> " + video.currentTime +" = " +video.currentTime) ;
    }
    
    if(e.keyCode == 109){
      if(video.playbackRate != 1){
        video.playbackRate -= 1;
        console.log("Speed changed to "+ video.playbackRate);
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

  cm.Item({ label: "0.5X", data: "0.5X" }),
  cm.Separator(),
  cm.Item({ label: "1.0+", data: "1" }),
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
