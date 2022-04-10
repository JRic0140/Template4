const parallax = document.querySelector(':root').style

var parPost = 0

    window.addEventListener('wheel',(a)=>{
        
        parPost >= 0 ?parPost += a.deltaY:0
        parPost < -1 ?parPost = 0:0
        parPost > 1000?parPost = 1000:0
        parallax.setProperty('--parPosition',`${-parPost/2}px`)     
        
    })