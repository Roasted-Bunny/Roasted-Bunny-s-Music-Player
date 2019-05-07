function nowPlaying() {
  var name = document.getElementById("upload").value
  name = name.replace('C:\\fakepath\\', '');
  name = name.split('.')[0]
  document.getElementById("playing").innerHTML = "<strong><em>♫ \xa0 Now playing<em></strong> \xa0 \xa0 | \xa0 \xa0<em>" + name + "\xa0 ♫</em><hr>";
}
