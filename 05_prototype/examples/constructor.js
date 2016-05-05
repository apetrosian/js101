// Rocket "Contructor"
function Rocket(){
  this.missionName = '';
}

Rocket.prototype.lunch = function() {
  if(this.missionName){
    console.log('Misson ' + this.missionName + ' TAKE OFF!');
  } else {
    console.log('Houston, we have a problem. Mission is not specified!');
  }
};

Rocket.prototype.setMission = function(name) {
  this.missionName = name;
};

// "Contructor call"
var saturnV = new Rocket();

saturnV.doLunch = function() {
  console.log('Flight control center: Engine start!');

  this.lunch();
};

saturnV.doLunch();

saturnV.setMission('Apollo 17');
saturnV.doLunch();
