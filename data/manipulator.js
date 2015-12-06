//on Keydown listener
function handle(e){

  if(!document.getElementsByTagName("video")[0].paused){ //err if vid paused and change
    
    if(e.keyCode == 107){
      document.getElementsByTagName("video")[0].playbackRate += 1;
    }
    if(e.keyCode == 109){
      if(document.getElementsByTagName("video")[0].playbackRate != 1){
        document.getElementsByTagName("video")[0].playbackRate -= 1;
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
