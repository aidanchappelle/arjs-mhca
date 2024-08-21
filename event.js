window.addEventListener('markerFound', (e)=>{ 
    setTimeout(1000)
    console.log(window.markerFound)
    document.querySelector('#video').play();
    });

window.addEventListener('markerLost', (e)=>{ 
    setTimeout(1000)
    console.log(window.markerLost)
    document.querySelector('#video').pause();
    });
