let btn = document.querySelector('body');
let value = document.querySelectorAll('button');
let text = document.querySelector('textarea');
let helpe_btn = document.querySelector('.help-button');
//About us button
helpe_btn.addEventListener('click' , function(){
  document.querySelector('.help-box').style.top = "100px";
  document.querySelector('.help-box').style.opacity=  "1";
})
btn.addEventListener('keydown' , function(e){
    //new feature for add rgb in buttons
    if(e.altKey && e.key == 'a'){
        let help_text = document.querySelector('.help-text');
        help_text.classList.toggle('help_text_rgb');
        let button = document.querySelectorAll('button');
        for(let i = 0 ; i <= 33 ; i++){
        button[i].classList.toggle('rgb');
        }
    }
    //find button and add style for client
    for(let i = 0 ; i <= 33 ; i++){
        if(value[i].innerHTML == e.key.toUpperCase()){
            value[i].classList.toggle('active');
            let a = Math.floor(Math.random() * 250);
            let b = Math.floor(Math.random() * 250);
            let c = Math.floor(Math.random() * 250);
            value[i].style.color = `rgb(${a}, ${b}, ${c})`;
            //check client capslock
            if (e.getModifierState("CapsLock")) {
                text.value += value[i].innerHTML.toUpperCase();
              } else {
                text.value += value[i].innerHTML.toLowerCase();
              }

        }
    }}
)
//find button and remove style from selected button
btn.addEventListener('keyup' , function(e){
    for(let i = 0 ; i <= 33 ; i++){
        if(value[i].innerHTML == e.key.toUpperCase()){
            value[i].classList.toggle('active');
            value[i].style.color = "black";
        }
    }
})