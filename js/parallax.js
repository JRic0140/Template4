const parallax = document.querySelector(':root').style

var parPost = 0

    window.addEventListener('wheel',(a)=>{
        
        parPost >= 0 ?parPost += a.deltaY:0
        parPost < -1 ?parPost = 5:0
        parPost > 500?parPost = 500:0
        parallax.setProperty('--parPosition',`${-parPost/2}px`)     
        
    })