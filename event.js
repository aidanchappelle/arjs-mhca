window.addEventListener('markerFound', (e)=>{ 
    setTimeout(1000)
    console.log('e')
    document.querySelector('#video').play();
    });

anchorRef.addEventListener('markerLost', (e)=>{ 
    setTimeout(1000)
    console.log('markerLost')
    document.querySelector('#video').play();
    });
