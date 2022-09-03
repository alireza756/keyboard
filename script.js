let btn = document.querySelector('body');
let value = document.querySelectorAll('button');
let text = document.querySelector('textarea');
btn.addEventListener('keydown' , function(e){
    for(let i = 0 ; i <= 33 ; i++){
        if(value[i].innerHTML == e.key.toUpperCase()){
            value[i].classList.toggle('active');
            text.value += value[i].innerHTML;
        }
    }}
)
btn.addEventListener('keyup' , function(e){
    for(let i = 0 ; i <= 33 ; i++){
        if(value[i].innerHTML == e.key.toUpperCase()){
            value[i].classList.toggle('active');
        }
    }
})