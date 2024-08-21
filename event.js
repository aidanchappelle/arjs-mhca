window.addEventListener('markerFound', (e)=>{ 
    setTimeout(1000)
    console.log()
    document.querySelector('#video').play();
    
    // Prevent asynchronous errors caused by play/pause.
    // https://goo.gl/LdLk22
    
    // Show loading animation.
      var playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }
});

window.addEventListener('markerLost', (e)=>{ 
    setTimeout(1000)
    console.log(e)
    
    // Prevent asynchronous errors caused by play/pause.
    // https://goo.gl/LdLk22
    
    // Show loading animation.
      var playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }
});
