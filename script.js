/*window.addEventListener('resize', function(){
    var iframe = document.getElementById('video1');
    iframe.style.width = "80%";
    iframe.style.height = "100%";
  });*/
function changeVideo(videoId) {
    var video = document.getElementById("video1");
      video.src = "https://www.youtube.com/embed/" + videoId;
}

    //ao clicar no botão abaixo do vídeo, window.location faz um redirecionamento de página para o link da var comprarAgora.
function redirect() {
    var gifUrl = "https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif";
       //var = gifUrl = window.open("https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif", "gifPopup", "height=500,width=500,scrollbars=no");
    var popup = window.open(gifUrl, '_blank');
    if(popup) {
        popup.focus();
    } else {
        alert("Pop-up bloqueado. Por favor habilite pop-ups para este site para ver o gif.");
    }
}
