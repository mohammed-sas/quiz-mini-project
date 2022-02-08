const seconds = document.querySelector('#seconds');
const timer = document.querySelector('.timer');
let time =15;
let initialTime = time;

const setTime=()=>{
    time--;
    seconds.innerHTML=`${time}`;
    if(time < Math.ceil(initialTime/2)){
        timer.style.outlineColor='#facc15';
    }
    if(time === 0){
        timer.style.outlineColor='#b91c1c';
        clearInterval(id);
    }
}
let id =setInterval(setTime,1000);