//generate a random color 

const randomColor = function () {
    const hexValue = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color = color + hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

const startChangingColor = () => {
    
function changeBgColor () {
    document.body.style.backgroundColor = randomColor();
};

if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000);
    };
};

const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);