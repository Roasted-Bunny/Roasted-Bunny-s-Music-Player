function uRL() {
document.getElementById('URL').innerHTML = '<input type="url" placeholder="Paste URL" id="Link"><p>After you have pasted your link, click the music icon to start the song. Make sure you include the http(s) or it will not work. Make sure it is a direct file<a href="https://sample-videos.com/audio/mp3/wave.mp3" target="_blank"><u> for example</u></a> - YouTube or other sites that do not directly play the file will not work. </p>';
}

function playURL() {
var link = document.getElementById('Link').value;
if (link != "") {
document.getElementById('music').src = link;
document.getElementById('music').play();
document.getElementById("playing").innerHTML = "<strong><em>♫ \xa0 Now playing<em></strong> \xa0 \xa0 | \xa0 \xa0<em>" + link + "\xa0 ♫</em><hr>";
document.getElementById('URL').innerHTML = "";
}
}
