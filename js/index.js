const link = document.querySelector('a');
if (Math.random()>0.5) {
    link.href = "https://dobrafiz.blogspot.com/";
    link.textContent='Dobra fizika3 :D';    
}

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara);
sect.appendChild(linkPara.cloneNode(true));

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

const clock = document.querySelector('.clock');

setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString();  
}, 1000);

document.querySelector(".click-me").addEventListener('click',clickButton);

function clickButton (){
    const para = document.createElement('p');
    para.textContent = 'We hope you enjoyed the ride.';
    sect.appendChild(para);

}

$('.click-jq').click(()=> {
    $('p').toggle(1000);
});

const display = document.querySelector('.calc .display');
document.querySelectorAll('.digits , .opers')
    .forEach(button =>button.addEventListener('click',digitOperPressed));

function digitOperPressed(event){
    const btnText = event.target.innerHTML;
    display.value+=btnText;
}

document.querySelector('.calc .eq')
    .addEventListener('click',eqPressed);

function eqPressed(){
    display.value = eval(display.value)
}