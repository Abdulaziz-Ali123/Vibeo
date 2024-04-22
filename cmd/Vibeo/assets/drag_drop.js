document.addEventListener("DOMContentLoaded", function() {
  var input = document.getElementById("drop_zone");
  var infoZone = document.getElementById("filename")


  input.addEventListener("change", showFileName)
  input.addEventListener("drop", dropHandler)
  input.addEventListener("dragover", dragOverHandler)

  function dropHandler(ev) {
    console.log("File(s) dropped");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          if (i === 0){
            const file = item.getAsFile();
            if (file.size < 1000000000){ // restrict size to 1 gb
              infoZone.textContent = 'File name: ' + file.name;
            }
          }
          
        }
      });
    } 
}

  function showFileName(event) {
    var input = event.target;
    var fileName = input.files[0].name;
    infoZone.textContent = 'File name: ' + fileName;
  }
});

