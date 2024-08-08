window.addEventListener('markerFound', (e)=>{ 
    setTimeout(1000)
    console.log(markerFound())
    document.querySelector('#video').play();
    });

window.addEventListener('markerLost', (e)=>{ 
    setTimeout(1000)
    console.log(markerLost())
    document.querySelector('#video').play();
    });
