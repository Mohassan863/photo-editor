let saturate = document.querySelector('#saturate');
let brightness = document.querySelector('#brightness');
let contrast = document.querySelector('#contrast');
let sepia = document.querySelector('#sepia');
let grayscale = document.querySelector('#grayscale');
let invert = document.querySelector('#invert');
let blur = document.querySelector('#blur');
let hueRotate = document.querySelector('#hue-rotate');

let img = document.querySelector('img');
let download = document.querySelector('#download');
let imgBox = document.querySelector('.img-box');
let upload = document.querySelector('#upload');
let reset = document.querySelector('#reset');

let canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function resetValue(){
    img.style.filter = 'none';
    saturate.value = '100';
    brightness.value = '100';
    contrast.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    invert.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
}

window.onload = () => {
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
}

reset.onclick = function() {
    // عند الضغط على زر "إعادة الضبط"، أعد ضبط الفلاتر
    resetValue();
}

upload.onchange = function(){
    reset.style.display = 'inline-block';
        imgBox.style.display = 'block';
        download.style.display = 'inline-block';
        img.style.display = 'block';
        let file = new FileReader();
        file.readAsDataURL(upload.files[0]);
        file.onload = function(){
            img.src = file.result;
        }
        img.onload = function(){
            canvas.width = 1200;
            canvas.height = 1000;
             
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            img.style.display = 'none';
        
        }
    }

let filters = document.querySelectorAll('ul li input');
filters.forEach( filter => {
    filter.addEventListener('input', function(){
      ctx.filter = `
      saturate(${saturate.value}%)
      brightness(${brightness.value}%)
      contrast(${contrast.value}%)
      sepia(${sepia.value}%)
      grayscale(${grayscale.value})
      blur(${blur.value}px)
      hue-rotate(${hueRotate.value}deg)
      `
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);


    })
})


download.onclick = function(){
    download.href = canvas.toDataURL('image/jpeg', );



}