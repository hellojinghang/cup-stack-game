let current;

function newQ(){
  current = generateQuestion();
  render(current);
}

newQ();

document.addEventListener("click",newQ);

let startX=0;

document.addEventListener("touchstart",e=>{
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend",e=>{
  let dx = e.changedTouches[0].clientX - startX;
  if(Math.abs(dx)>50) newQ();
});
