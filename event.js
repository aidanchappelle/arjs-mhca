x = 0;

window.addEventListener('click', function () { 

if(x === 0)
    {document.querySelector('#video').play();
    x = 1}

else
    {document.querySelector('#video').pause();
    x = 0}
 });