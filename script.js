var aula1 = 'KWhXWFY0r74'
var aula2 = 1
var aula3 = 2

function changeVideo(videoId) {
  var video = document.getElementById("video1");
    video.src = "https://www.youtube.com/embed/" + videoId;
  }


//ao clicar no botão abaixo do vídeo, window.location faz um redirecionamento de página para o link da var comprarAgora.
function openGif() {
  window.open("https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif", "gifPopup", "height=500,width=500,scrollbars=no");
}

