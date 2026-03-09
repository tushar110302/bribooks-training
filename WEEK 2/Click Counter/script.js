const incr = document.querySelector('#btn-incr');
const decr = document.querySelector('#btn-decr');
const reset = document.querySelector('.btn-reset');
const num = document.querySelector('.num');

incr.addEventListener('click', () =>{
    num.textContent++;
})
decr.addEventListener('click', () => {
    num.textContent--;
})
reset.addEventListener('click', () => {
    num.textContent = 0;
})