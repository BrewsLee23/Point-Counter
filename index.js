let homePointsEl = document.getElementById("homePoints-el");
let homePoints = 0;
let guestPointsEl = document.getElementById("guestPoints-el");
let guestPoints = 0;
let errorMessageEl = document.getElementById("errorMessage");

function addPoints(n, team) { //n = number of points to be added | team = the team which scored the points
  if(team == 1) { // team 1 = HOME
    homePoints += n;
    homePointsEl.textContent = homePoints;
  }
  else if (team == 2) { // team 2 = GUEST
    guestPoints += n;
    guestPointsEl.textContent = guestPoints;
  }
  else  //wrong team number case
    errorMessageEl.textContent = "Something went wrong :(";

  if(homePoints > guestPoints) {
    homePointsEl.style.outline = "2px solid #adff2f";
    guestPointsEl.style.outline = "2px none #adff2f";
  }
  else if(guestPoints > homePoints) {
    guestPointsEl.style.outline = "2px solid #adff2f";
    homePointsEl.style.outline = "2px none #adff2f";
  }
  else {
    homePointsEl.style.outline = "2px solid #ca880e";
    guestPointsEl.style.outline = "2px solid #ca880e";
  }
}

function resetGame() {
  homePoints = 0;
  homePointsEl.textContent = homePoints;
  guestPoints = 0;
  guestPointsEl.textContent = guestPoints;

  homePointsEl.style.outline = "2px none #adff2f";
  guestPointsEl.style.outline = "2px none #adff2f";
}