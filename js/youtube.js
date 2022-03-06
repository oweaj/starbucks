  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'EJF919p_hb0', // 최초 재상할 유투브 영상 ID(주소창 참고)
    playerVars: {
      autoplay: true, // 자동 재생 여부 
      loop: true, // 반복 재생 여부
      playlist: 'EJF919p_hb0' // 반복 재생할 유투브 영상 ID 목록
     },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거  
      }
    }
  });
}