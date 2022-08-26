let btn = document.querySelector('body');
let value = document.querySelectorAll('button');
btn.addEventListener('keydown' , function(e){
    for(let i = 1 ; i <= 34 ; i++){
        if(value[i].innerHTML == e.key.toUpperCase()){
            value[i].classList.toggle('active');
        }
    }}
)
btn.addEventListener('keyup' , function(e){
    for(let i = 1 ; i <= 34 ; i++){
        if(value[i].innerHTML == e.key.toUpperCase()){
            value[i].classList.toggle('active');
        }
    }
})