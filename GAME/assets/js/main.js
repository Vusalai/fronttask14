let start=document.getElementById('start')
let end=document.getElementById('end')
let margin=1;



document.body.onkeyup=function (a) {
    if(a.keyCode===40){
        margin+=1
        start.style.marginTop=`${margin}rem`
    }
    else if(a.keyCode===39){
        margin+=1
        start.style.marginLeft=`${margin}rem`
    } if(a.keyCode===37){
         margin+=1
         start.style.marginBottom=`${margin}rem`
    }else if(a.keyCode===38){
        margin+=1
        start.style.marginRight=`${margin}rem`
    }else{
        alert('Game Over')
        end.style.backgroundColor='darkblue'
    }
    
}