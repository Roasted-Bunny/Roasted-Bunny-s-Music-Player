function byId(e) {
  return document.getElementById(e);
}

window.addEventListener('load', onDocLoaded, false);

function onDocLoaded() {
  byId('upload').addEventListener('change', onChosenFileChange, false);
}

function onChosenFileChange(evt) {
  var fileType = this.files[0].type;

  if (fileType.indexOf('audio') != -1)
    loadFileObject(this.files[0], onmusicLoaded);

}

function loadFileObject(fileObj, loadedCallback) {
  var reader = new FileReader();
  reader.onload = loadedCallback;
  reader.readAsDataURL(fileObj);
}

function onmusicLoaded(evt) {
  byId('music').src = evt.target.result;
  byId('music').play();
}
