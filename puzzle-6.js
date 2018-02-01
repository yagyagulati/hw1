right();
var A = getColor();
function moveUp(){
  if (getColor()=="red"){
    up();
    up();
    up();
    if (getColor()=="blue"){
      right();
      up();
    } else 
        left();
        up();
      }
    }

  function moveDown(){
    if (getColor()=="blue"){
      down();
      down();
      down();
      if (getColor()=="red"){
        left();
        down();
      } else {
        right();
        down();
        }
      }
    }

moveUp();
moveDown();
