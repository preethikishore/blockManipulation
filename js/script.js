window.onload = function(){
    let block = document.getElementById('block');
    // Manupulation of pos-y

    let posY = document.getElementById('pos-y');
    posY.onchange = function(){
        block.style.top = posY.value +'px';
    }
    //posX manupulation

    let posX = document.getElementById('pos-x');
    posX.onchange = function(){
        block.style.left = posX.value + 'px';
    }

    // size Manupulationb
    
    let size = document.getElementById('size');
    size.onchange = function(){
        block.style.transform = 'scale('+size.value+')';
    }

    
    // opacity Manupulationb
    
    let opacity = document.getElementById('opacity');
    opacity.onchange = function(){
        block.style.opacity = opacity.value;
    }

    // shape Manupulationb
    
    let selector = document.getElementById('shape-select');
    let btnselect = document.getElementById('id-ok');
   
    btnselect.onclick = function(){
        let option = selector.value;

        if(option === '1')
        {
            block.style.borderRadius = '0';
            block.style.transform = 'rotate(0deg)'
        }else if(option === '2')
        {
          block.style.borderRadius = '50%';

        }else if(option === '3')
        {
            block.style.borderRadius = '0';

            block.style.transform = 'rotate(45deg)';
        }
    }
    // color hex
    let hex = document.getElementById('hex');
    hex.onkeypress = function(e){
        if(e.which === 13)
        {
            block.style.background ='#'+hex.value;
        }
       
    }
    let rgbaR = document.getElementById('rgba-r');
    let rgbaG = document.getElementById('rgba-g');
    let rgbaB = document.getElementById('rgba-b');
    let rgbaA = document.getElementById('rgba-a');

    let rgbCont = document.querySelector( '.rgba-container');
    let rgbaInput = rgbCont.querySelectorAll('input');
    for(let i = 0; i<rgbaInput.length; i++ )
    {
        rgbaInput[i].onchange = function(){
            block.style.backgroundColor = 'rgba('+rgbaR.value+','+rgbaG.value+','
            +rgbaB.value+','+rgbaA.value+')';
        }
    }

}