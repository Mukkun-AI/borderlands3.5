let EnemyName = ["boneHead","lillunatic","hotLoader","BadassPirate","LilOutlaw","BadassMidget","BadassMarine"];
let Enemynbr = EnemyName.length ;


function showencard() {
    $('.encard').show();
    let EnemyName = ["boneHead","lillunatic","hotLoader","BadassPirate","LilOutlaw","BadassMidget","BadassMarine"];
    let Enemynbr = EnemyName.length ;
    let rand = Math.floor(Math.random() * (Enemynbr)) ; 
    for (let i = 0; i < Enemynbr ; i++) {
            
            let ch = document.querySelector('#'+EnemyName[i]);
            if (i == rand) {
                ch.style.transition = "1s 0s" ;
                ch.style.opacity = 1 ;  
            }else{
                ch.style.transition = "0s 0s" ;
                ch.style.opacity = 0 ;
            }          
        }
}

document.querySelector('.start').addEventListener("click",showencard);
