const COLORS = ["red","yellow","blue","orange","green","purple"];

function shuffle(a){
  return a.sort(()=>Math.random()-0.5);
}

function pickCups(){
  const n = Math.floor(Math.random()*6)+1;
  return shuffle([...COLORS]).slice(0,n);
}

// simple tree generator
function generateQuestion(){
  const cups = pickCups();

  let nodes = cups.map(c => ({
    color:c,
    children:[],
    inverted: Math.random() < 0.3
  }));

  // build chain + branching
  let available = [...nodes];
  let roots = [];

  while(available.length > 1){
    let child = available.pop();
    let parent = available[Math.floor(Math.random()*available.length)];
    parent.children.push(child);
  }

  roots = available;
  return { roots };
}
