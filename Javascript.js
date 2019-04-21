var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-135626760-1');




function byId(e){return document.getElementById(e);}

window.addEventListener('load', onDocLoaded, false);

function onDocLoaded()
{
    byId('upload').addEventListener('change', onChosenFileChange, false);
}

function onChosenFileChange(evt)
{
    var fileType = this.files[0].type;

    if (fileType.indexOf('audio') != -1)
        loadFileObject(this.files[0], onmusicLoaded);

}

function loadFileObject(fileObj, loadedCallback)
{
    var reader = new FileReader();
    reader.onload = loadedCallback;
    reader.readAsDataURL( fileObj );
}

function onmusicLoaded(evt)
{
    byId('music').src = evt.target.result;
    byId('music').play();
}
