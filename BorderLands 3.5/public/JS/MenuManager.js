let pinfoactive = [false,false,false,false];
let VHclass = ["BM","Siren","Gunner","Op"];
let VHname = {BM: "Fl4k", Siren: "Amara", Gunner: "Moze", Op: "Zane"};

//hide elements
{
     $('.start').hide();
     $('.chooseVH').hide();
     $('.VHcard').hide();
     $('.encard').hide();
     $('#returnbtn').hide();
}
 
 //background music
 $(function(){
     let audio = document.getElementById('main-menu-bg-music');
     audio.play();
 }); 
 
 //play button click
 function play(x) {
     $('.chooseVH').show();
     x.classList.add("play_fade") ;
     let ids =["#BM","#Siren","#Op","#Gunner"];
     let j = 0.8;
     let h = document.querySelector(".header");
     h.style.margin ="0 0";
     h.style.opacity = '1' ;
     h.style.transition = 'all 1s ease-in-out 0.5s';
     for (let i = 0; i < 4; i++) {
         let fade = document.querySelector(ids[i]);
         fade.style.opacity = '1' ;
         fade.style.visibility = 'visible' ;
         fade.style.transition = 'all 0.6s ease '+j+'s';
         j+= 0.4 ;  
         h = document.querySelector(ids[i]+"_img");
         h.style.cursor = 'pointer' ;        
     }
     
 }
 
//make sure .pinfos don't overlap
function dontoverlap(i,pinfoactive,VHclass,a,b) {
     if (i == a && pinfoactive[b]==true) {
          let k = document.querySelector('#'+VHclass[b] +' .pinfo');
          k.style.visibility = 'hidden' ; 
          pinfoactive[b] = false;
     }
}

//show characters
let showinfo = function (id) {

     for (let i = 0; i < 4; i++) {
          let fade = document.querySelector('#'+VHclass[i]);
          fade.style.opacity = '1' ;
          fade.style.transition = 'all 0.75s ease 0.1s';
     }

     for (let i = 0; i < VHclass.length; i++) {
          let k = document.querySelector('#'+VHclass[i] +'info'); 
          //pinfos overlap condition
          if ((VHclass[i] == id) && (pinfoactive[i]==false)) {
               k.style.visibility = 'visible' ; 
               pinfoactive[i] = true;
               dontoverlap(i,pinfoactive,VHclass,0,1);
               dontoverlap(i,pinfoactive,VHclass,1,0);
               dontoverlap(i,pinfoactive,VHclass,2,3);
               dontoverlap(i,pinfoactive,VHclass,3,2);
               break;
          //player selected 
          }else if ((VHclass[i] == id) && (pinfoactive[i] == true)){
               for (let j = 0 ; j < VHclass.length; j++) {
                    //selected player
                    let str = '#'+VHname[VHclass[j]]+'Card' ;
                    let vh = document.querySelector(str);
                    if((j==i)){
                         let k = document.querySelector('#'+VHclass[j]);
                         k.style.transition = '0s 0s';
                         k.style.outline = '3px solid white';
                         setTimeout(function () {
                              k.style.transition = '1s';
                              k.style.opacity = 0 ;
                              k.style.visibility = 'hidden' ;  
                         },100);
                         setTimeout(function () {
                              $('.VHcard').show();
                              vh.style.opacity = '1' ;
                              vh.style.visibility = 'visible' ;
                         },1400);
                    
                    }//unselected players
                    else{
                         let k = document.querySelector('#'+VHclass[j]);
                         k.style.transition = '0s';
                         k.style.visibility = 'hidden' ;  
                         k.style.opacity = 0 ;
                         pinfoactive[j] = false; 
                    }
                    
               }

               //hide header
               let h = document.querySelector(".header");
               h.style.margin ="0 684px";
               h.style.opacity = '0' ;
               
               //show start btn 
               setTimeout(() => {
                    $('.start').show();
                    h = document.querySelector(".start");
                    h.style.transition = "0.5s 0s" ;
                    h.style.opacity = '1' ;
                    h.style.visibility = 'visible' ; 
                    $('#returnbtn').show();
                    h = document.querySelector("#returnbtn");
                    h.style.opacity = 0.75 ; 
               }, 1500);
               

               //hide players info
               setTimeout(() => {
                    $('.chooseVH').hide();
               }, 2000);

               
          }
     }
     
} 

//start button click
function start() {
     let h = document.querySelector(".start");
     h.style.transition = "0.5s 0s" ;
     h.style.opacity = '0' ;
     h.style.visibility = 'hidden' ;     
 }

