const sun = document.querySelector('#sun');
const sun_ctx = sun.getContext('2d');
const contents_graph = document.querySelector('#garbage-contents-info-graph');

sun_ctx.beginPath();
sun_ctx.arc(50, 50, 50, 0 , Math.PI * 2, false);
sun_ctx.fillStyle = "#FFC849";
sun_ctx.fill();
sun_ctx.closePath();

// --------------------- 캔버스----------------------

const wave1 = document.querySelector("#wave1");
const wave2 = document.querySelector("#wave2");
const wave3 = document.querySelector("#wave3");
const wave4 = document.querySelector("#wave4");
const submarine = document.querySelector("#submarine");
const subject = document.querySelector('.intro_page > .subject');
const light = document.querySelector('#light');
const info_button = document.querySelectorAll('button');
const contentsInfo = document.querySelectorAll('.contents-info-wrapper');
const ocean_background = document.querySelector('#ocean-background');
const ocean_background2 = document.querySelector('#ocean-background2');
const garbage1 = document.querySelector('#garbage1');
const garbage2 = document.querySelector('#garbage2');
const garbage3 = document.querySelector('#garbage3');
const garbage4 = document.querySelector('#garbage4');
const waterDrop = document.querySelector('#waterdrop');
const speech_wrapper = document.querySelector('.speech-bubble-wrapper');
const garbage_contents_image = document.querySelector('.garbage-contents-image > img');
const animal_contents_image = document.querySelector('.animals-contents-image > img');
const nuclear_contents_image = document.querySelector('.nuclear-contents-image > img');
const arrow = document.querySelector('#arrow');
const arrow2 = document.querySelector('#arrow2');
const scroll_animation_wrapper = document.querySelector('.scroll-animation-wrapper');

window.onload=function(){
    
    

    // let submarine_top = submarine.style.top;
    arrow.style.marginLeft = -(arrow.getBoundingClientRect().width/2) + "px";
    arrow2.style.marginLeft = -(arrow2.getBoundingClientRect().width/2) + "px";
    submarine.style.marginLeft = -(submarine.getBoundingClientRect().width/2) + "px";
    garbage1.style.marginLeft = -(garbage1.getBoundingClientRect().width/2) + "px";
    garbage2.style.marginLeft = -(garbage2.getBoundingClientRect().width/2) + "px";
    garbage3.style.marginLeft = -(garbage3.getBoundingClientRect().width/2) + "px";
    garbage4.style.marginLeft = -(garbage4.getBoundingClientRect().width/2) + "px";
    

    

    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        sun.style.top = value * 0.15 + '%';
        wave1.style.top =  (0 + value * -0.07)  + '%';
        wave2.style.top =  (-8 + value * -0.05) + '%';
        wave3.style.top = (-16 + value * -0.04) + '%';
        wave4.style.top = (-24 + value * -0.03) + '%';
        // light.style.top = (30 + value * 0.1) + '%';
        submarine.style.top = (40 + value * 0.13) + '%';
        ocean_background.style.top = (value * 0.01) + '%';
        ocean_background2.style.top = (24 + value * 0.01) + '%';
        subject.style.opacity = 1 - (value * 0.009);
        
        if(get_scroll_percentage() > 20){
            sun.style.opacity = "0";
            // submarine.style.opacity = "0.5";
            // light.style.opacity = "0.5";
            speech_wrapper.style.display = "none";
            scroll_animation_wrapper.style.display = "none";
        }

        else{
            sun.style.opacity = "1";
            // submarine.style.opacity = "1";
            // light.style.opacity = "0";
            scroll_animation_wrapper.style.display = "block";
        }

        console.log(scrollY);

        // submarine_top = submarine.style.top;

        // // if( scrollY - 3000 > 0){
        // //     // light.style.opacity = 0.5 - (scrollY - 3000) * 0.001;
        // //     // submarine.style.opacity = 0.5 - (scrollY - 3000) * 0.001;
        // //     // submarine.style.display = "block";
        // //     // light.style.display = "block";
            
        // // }

        // if(get_scroll_percentage() > 80){
        //     document.querySelector('#drinking-warning > h1').style.opacity = "1";
        //     document.querySelector('#drinking-warning > p').style.opacity = "1";
        //     document.querySelector('#drinking-warning').style.bottom = "13%";
        // }

        // else{
        //     document.querySelector('#drinking-warning > h1').style.opacity = "0";
        //     document.querySelector('#drinking-warning > p').style.opacity = "0";
        //     document.querySelector('#drinking-warning').style.bottom = "10%";
        // }

        // // if(scrollY > 4900){
        // //     document.querySelector('#animal-warning > h1').style.opacity = "1";
        // //     document.querySelector('#animal-warning > p').style.opacity = "1";
        // //     document.querySelector('#animal-warning').style.bottom = "13%";
        // // }

        // // else{
        // //     document.querySelector('#animal-warning > h1').style.opacity = "0";
        // //     document.querySelector('#animal-warning > p').style.opacity = "0";
        // //     document.querySelector('#animal-warning').style.bottom = "10%";
        // // }

        // // if(scrollY > 5200){
        // //     document.querySelector('#earth-warning > h1').style.opacity = "1";
        // //     document.querySelector('#earth-warning > p').style.opacity = "1";
        // //     document.querySelector('#earth-warning').style.bottom = "13%";
        // // }

        // // else{
        // //     document.querySelector('#earth-warning > h1').style.opacity = "0";
        // //     document.querySelector('#earth-warning > p').style.opacity = "0";
        // //     document.querySelector('#earth-warning').style.bottom = "10%";
        // // }
            
        
    })

    for (let i = 0; i < info_button.length; i++) {
        contentsInfo[i].value = "내용 펼침";
        info_button[i].addEventListener('click', () => {
            if (contentsInfo[i].value == "내용 펼침") {
                contentsInfo[i].style.display = "none";
                contentsInfo[i].value = "내용 닫음";
            } else {
                contentsInfo[i].style.display = "flex";
                contentsInfo[i].value = "내용 펼침";
            }

        })
    }

    setInterval(waterdropAnimation, 2000);

    function get_scroll_percentage() {
        return ((document.body.scrollTop + window.innerHeight) / document.documentElement.scrollHeight
        ) * 100;
    }

    function waterdropAnimation(){
        waterDrop.style.transition = "all 0.8s ease-in-out";
        waterDrop.style.top = "200px";
        waterDrop.style.opacity = "0";
        setTimeout(()=>{
            waterDrop.style.transition = "none";
            waterDrop.style.top = "0px";
            waterDrop.style.opacity = "1";
        },1000)
    }
}
