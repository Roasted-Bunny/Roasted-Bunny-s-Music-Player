function nowPlaying() {
  var path = document.getElementById("upload").value
  var trim = path.replace('C:\\fakepath\\', '');
  var name = trim.split('.')[0]
  document.getElementById("playing").innerHTML = "<strong><em>♫ \xa0 Now playing<em></strong> \xa0 \xa0 | \xa0 \xa0<em>" + name + "\xa0 ♫</em><hr>";
}
