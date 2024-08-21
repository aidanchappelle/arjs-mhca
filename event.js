window.addEventListener('markerFound', (e)=>{ 
    console.log("Found",e.target.id)

    // Prevent asynchronous errors caused by play/pause.
    // https://goo.gl/LdLk22
    
    // Show loading animation.
      var playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
            document.querySelector('#target-'+e.target.id).play()
            console.log("Played",'#target-'+e.target.id)
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }
});

window.addEventListener('markerLost', (e)=>{ 
    console.log("Lost",e.target.id)
    
    // Prevent asynchronous errors caused by play/pause.
    // https://goo.gl/LdLk22
    
    // Show loading animation.
      var playPromise = video.pause();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
            document.querySelector('#target-'+e.target.id).pause()
            console.log("Paused",'#target-'+e.target.id)
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }
});
