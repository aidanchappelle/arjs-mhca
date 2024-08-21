window.addEventListener('markerFound', (e)=>{ 
    console.log(e.target.id)
    
    // Prevent asynchronous errors caused by play/pause.
    // https://goo.gl/LdLk22
    
    // Show loading animation.
      var playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
            document.querySelector('#target-'+e.target.id).play()
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }
});

window.addEventListener('markerLost', (e)=>{ 
    console.log(e.target.id)
    
    // Prevent asynchronous errors caused by play/pause.
    // https://goo.gl/LdLk22
    
    // Show loading animation.
      var playPromise = video.pause();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
            document.querySelector('#target-'+e.target.id).pause()
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }
});
detail.parameters.patternUrl
currentTarget.document.lastModified
