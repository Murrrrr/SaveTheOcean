const sun = document.querySelector('canvas');
const ctx = sun.getContext('2d');
ctx.beginPath();
ctx.fillStyle = "#FFC849";
ctx.arc(50, 50, 50, 0, Math.PI*2);
ctx.fill();


const subject = document.querySelector('.subject');
const submarine = document.querySelector('#submarine');
const wave1 = document.querySelector('#wave1');
const wave2 = document.querySelector('#wave2');
const wave3 = document.querySelector('#wave3');
const wave4 = document.querySelector('#wave4');
const light = document.querySelector('#light');
const garbage1 = document.querySelector('#garbage1');
const garbage2 = document.querySelector('#garbage2');
const garbage3 = document.querySelector('#garbage3');
const garbage4 = document.querySelector('#garbage4');
const garbage5 = document.querySelector('#garbage5');
const garbage6 = document.querySelector('#garbage6');
const garbage7 = document.querySelector('#garbage7');
const background = document.querySelectorAll('.background');
const waterSubject = document.querySelector('#water-wrapper > .subject');
const animalSubject = document.querySelector('#animal-wrapper > .subject');
const earthSubject = document.querySelector('#earth-wrapper > .subject');

window.onload = function(){
    let value;
    subject.style.marginLeft = -(subject.getBoundingClientRect().width/2) + 'px';
    subject.style.marginTop = -(subject.getBoundingClientRect().height/2) + 'px';
    submarine.style.marginLeft = -(submarine.getBoundingClientRect().width/2) + 'px';
    submarine.style.marginTop = -(submarine.getBoundingClientRect().height/2) + 'px';
    light.style.marginTop = -(light.getBoundingClientRect().height/2) + 'px';
    light.style.marginLeft = -(light.getBoundingClientRect().width/2) + 'px';

    window.addEventListener('scroll', ()=>{
        value = window.scrollY;
        bodyHeightPer = value / document.body.scrollHeight*100;

        if(bodyHeightPer > 2.6){
            submarine.style.opacity = '0.8';
            light.style.opacity = '0.5';
        }

        else{
            submarine.style.filter = "brightness(1)";
            submarine.style.opacity = '1';
            light.style.opacity = '0';
        }

        console.log(bodyHeightPer);

        if(bodyHeightPer > 50){
            submarine.style.opacity = 0.8 - (bodyHeightPer-50)*0.1;
            light.style.opacity = 0.5 - (bodyHeightPer-50)*0.1;
        }

        if(bodyHeightPer > 66){
            waterSubject.style.opacity = 1;
        }

        else{
            waterSubject.style.opacity = 0;
        }

        if(bodyHeightPer > 66){
            waterSubject.style.opacity = 1;
        }

        else{
            waterSubject.style.opacity = 0;
        }

        if(bodyHeightPer > 74){
            animalSubject.style.opacity = 1;
        }

        else{
            animalSubject.style.opacity = 0;
        }

        if(bodyHeightPer > 81){
            earthSubject.style.opacity = 1;
        }

        else{
            earthSubject.style.opacity = 0;
        }
        wave1.style.top  = 80 + (value * -0.09) + '%';
        wave2.style.top  = 70 + (value * -0.07) + '%';
        wave3.style.top  = 60 + (value * -0.05) + '%';
        wave4.style.top  = 50 + (value * -0.03) + '%';
        garbage1.style.top = (value * -0.5) + 'px';
        garbage2.style.top = (value * -0.5) + 'px';
        garbage3.style.top = (value * -0.5) + 'px';
        garbage4.style.top = (value * -0.5) + 'px';
        garbage5.style.top = (value * -0.5) + 'px';
        garbage6.style.top = (value * -0.5) + 'px';
        garbage7.style.top = (value * -0.5) + 'px';
        for(let i=0; i<background.length; i++){
            background[i].style.top = (value * 0.3) + 'px';
        }
    })

}

