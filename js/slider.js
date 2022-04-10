
    const contenedor = document.querySelectorAll('.slidercontainer li'),
    translateX = document.querySelector('.slidercontainer ul').style
    
    document.querySelector(':root').style.setProperty('--sizeSlider',`${contenedor.length*100}%`)   
    const nElements = 100 / contenedor.length
    var nPosition = 0
    
    class botonsEventSlider{
        
        constructor(event){
    
            this.event = event
            
            event == 'back'?(
    
                nPosition > 0?nPosition-=1:0,
                translateX.transform = `translatex(${-nElements*nPosition}%)`
    
                ):event == 'next'?(
                    
                nPosition < contenedor.length-1 ?nPosition+=1:nPosition=0,
                translateX.transform = `translatex(${-nElements*nPosition}%)`
                    
                    ):0
            }
    }



    setInterval(() => {
        new botonsEventSlider('next') 
    }, 4000);
