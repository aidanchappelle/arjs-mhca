window.addEventListener('markerFound', (e)=>{ 
    console.log("Found",e.target.id)
    document.querySelector('#target-'+e.target.id).play()
    console.log("Played",'#target-'+e.target.id)
});

window.addEventListener('markerLost', (e)=>{ 
    console.log("Lost",e.target.id)
    document.querySelector('#target-'+e.target.id).pause()
    console.log("Paused",'#target-'+e.target.id)
});
