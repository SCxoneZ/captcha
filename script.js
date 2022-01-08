const captchaBox = document.querySelector('.container .captcha-box');
const input = document.querySelector('.container .content input');
const btn = document.querySelector('.container .content .btn-submit');
const captchas = document.querySelectorAll('.captcha');
const fonts = ['Moon Dance', 'Playfair Display', 'Vujahday Script', 'Comforter Brush', 'Yellowtail', 'Alfa Slab One'];


function generateCaptcha(){
  captchaBox.style.backgroundColor = getRandHex();
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '1234567890'
  captchas.forEach(el => {
    const random1 = Math.random()*1;
    // const random2 = Math.random()*1;
    if(random1 <= 0.5){
      el.innerHTML = alphabets[Math.floor(Math.random()*alphabets.length)];
      el.style.fontFamily = generateFont();
    }else{
      el.innerHTML = numbers[Math.floor(Math.random()*numbers.length)];
      el.style.fontFamily = generateFont();
    }
  });
}

function generateFont(){
  return fonts[Math.floor(Math.random()*fonts.length)];
}

function getRandHex(){
  const alphabets = 'ABCDEF';
  const numbers = '0123456789';
  let hex = '#';
  
  for(let i = 0; i < 6; i++){
    let isWord;
    if(Math.random()*1 < 0.5){
      isWord = true;
    }else{
      isWord = false;
    }
    
    if(isWord){
      hex += alphabets[Math.floor(Math.random()*alphabets.length)];
    }else{
      hex += numbers[Math.floor(Math.random()*numbers.length)]
    }
    
  }
  
  return hex;
}
