function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
    setColor("red")
  }
}

function repeatUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
     setColor("red")
  }
}
  
function repeatRight(total) {
  var count = 0;
  while (count < total) {
    right();
    count = count + 1;
     setColor("red")
}
}

function repeatLeft(total) {
  var count = 0;
  while (count < total) {
    left();
    count = count + 1;
     setColor("red")
  }
}

repeatDown(15);
repeatRight(15);
repeatUp(15);
repeatLeft(15);