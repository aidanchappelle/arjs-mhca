window.addEventListener('markerFound', function () { 
    document.querySelector('#video1').play();
    })
window.addEventListener('markerLost', function () { 
    document.querySelector('#video1').pause();
    })
