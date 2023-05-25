function timeToWalk(steps, length, speedkm){

let speed = speedkm*1000/3600;
let distance = steps * length;
let minForBreak = Math.floor(distance / 500);
let time = (distance/speed) + minForBreak*60;

const hours = Math.floor(time/3600).toFixed(0).padStart(2,'0');
const minutes = Math.floor(time/60).toFixed(0).padStart(2,'0');
const seconds = Math.floor(time - minutes*60 - hours*3600).toFixed(0).padStart(2,'0');

return `${hours}:${minutes}:${seconds}`



}
console.log(timeToWalk(4000, 0.60, 5))