// Object Rocket
var Rocket = {
  missionName: '',

  lunch: function() {
    if(this.missionName){
      console.log('Misson ' + this.missionName + ' TAKE OFF!');
    } else {
      console.log('Houston, we have a problem. Mission is not specified!');
    }
  },

  setMission: function(name) {
    this.missionName = name;
  }
};

// Object saturnV
var saturnV = Object.create(Rocket);

saturnV.startLunch = function() {
  console.log('Flight control center: Engine start!');

  this.lunch();
};

saturnV.startLunch();

saturnV.setMission('Apollo 17');

saturnV.startLunch();
