let strng ="";
let title = document.querySelector('.title');

document.addEventListener('keydown',function(e){
  console.log(e);
  let keyElem ;
  if (e.key === "Backspace"  ) {
    keyElem = document.getElementById(`back`);
    strng = strng.slice(0, -1);
  }else{
    keyElem = document.getElementById(`${e.key.toUpperCase()}`);
    if (e.key.length < 2) {
      strng += e.key;
      console.log(strng);
    }
  }
  if (e.key !== " ") {
    keyElem?.classList.add('hit');
    setTimeout(function(){
      keyElem?.classList.remove('hit');
    },100);
  }
  title.innerHTML = strng;
})