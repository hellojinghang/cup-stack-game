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

  const poly = document.createElementNS("http://www.w3.org/2000/svg","polygon");
  poly.setAttribute("points", pts);
  poly.setAttribute("fill", COLORS[color]);
  poly.setAttribute("stroke", "#000");
  poly.setAttribute("stroke-width", "2");

  svg.appendChild(poly);
}

function render(question){
  svg.innerHTML = "";

  const CENTER_X = 200;   // FIXED SVG SPACE
  const START_Y = 50;

  function draw(node, x, y){
    drawCup(x,y,node.color,node.inverted);

    let nextY = y + H + 10;
    let offset = 90;

    node.children.forEach((c,i)=>{
      let nx = x + (i === 0 ? -offset : offset);
      draw(c,nx,nextY);
    });
  }

  question.roots.forEach((r,i)=>{
    draw(r, CENTER_X + i*120 - 60, START_Y);
  });
}
