document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('themeToggle');
    let isDarkTheme = false;

    themeToggleButton.addEventListener('click', function () {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme', isDarkTheme);
        toggleThemeImage();
    });

    function toggleThemeImage() {
        const themeImage = document.querySelector('.dark img');
        if (isDarkTheme) {
            themeImage.src = 'sun.jpg';
            themeImage.alt = 'Sun Image';
        } else {
            themeImage.src = 'moon.jpg';
            themeImage.alt = 'Moon Image';
        }
    }
});


let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonArray = Array.from(buttons);
let string = '';
buttonArray.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);
            display.value = string;
        }else if(e.target.innerHTML=='AC'){
            string= '';
            display.value = string;
        }else if(e.target.innerHTML=='='){
            string= eval(string);
            display.value = string;
        }else{
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
  }
