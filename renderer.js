const svg = document.getElementById("canvas");

const COLORS = {
  red:"#e74c3c",
  yellow:"#f1c40f",
  blue:"#3498db",
  orange:"#e67e22",
  green:"#2ecc71",
  purple:"#9b59b6"
};

const TOP = 40;
const BOTTOM = 80;
const H = 70;

function drawCup(x,y,color,inverted){
  const halfT = TOP/2;
  const halfB = BOTTOM/2;

  const pts = inverted ?
  `
  ${x-halfB},${y}
  ${x+halfB},${y}
  ${x+halfT},${y+H}
  ${x-halfT},${y+H}
  `
  :
  `
  ${x-halfT},${y}
  ${x+halfT},${y}
  ${x+halfB},${y+H}
  ${x-halfB},${y+H}
  `;

  let poly = document.createElementNS("http://www.w3.org/2000/svg","polygon");
  poly.setAttribute("points",pts);
  poly.setAttribute("fill",COLORS[color]);
  poly.setAttribute("stroke","#000");
  svg.appendChild(poly);
}

function render(question){
  svg.innerHTML="";

  function draw(node,x,y){
    drawCup(x,y,node.color,node.inverted);

    let offset = 120;
    let nextY = y + H + 10;

    node.children.forEach((c,i)=>{
      let nx = x + (i===0?-offset:offset);
      draw(c,nx,nextY);
    });
  }

  let startX = window.innerWidth/2;
  question.roots.forEach((r,i)=>{
    draw(r,startX + i*200 - 200,80);
  });
}
