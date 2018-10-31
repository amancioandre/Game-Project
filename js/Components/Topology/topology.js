class Topology {
  constructor(WIDTH, HEIGHT, start_position) {
    this.amplitude = new p5.Amplitude();
    
    this.start_position = start_position; // X start position
    this.width = 20; //Bars Width
    this.height = map(this.amplitude.getLevel(), 0, 1, 0, HEIGHT); //Map Amplitude Levels to the Canvas Height

    this.level = []; //Loaded Musics Array
    this.mood =  //Music Color Moods and Forms Array of Objects
      {
        anxiety:       ['#23002F', '#221E53', '#1A595E', '#188B52', '#2F9E4F'],
        angry:         ['#330A31', '#550036', '#800037', '#C60042', '#ED2840'],
        depression:    ['#000000', '#232323', '#3E3E3A', '#886069', '#25232F'],
        exihiliration: ['#CB3338', '#E67F2C', '#F2CA2B', '#0B8B74', '#6A1832'],
      };
  }

  levelLoader(levelArray) {
    levelArray.map((level, i) => {
      this.level[i].music = loadSound(level.path);
      this.level[i].mood = level.mood;
      this.level[i].name = level.name;
    })
  }

  renderBars() {
    let bars = [];
    if(this.height !== 0){
      bars = push({y: -this.height, x: this.start_position += this.width})
    }
    bars.forEach(bar => {
      rect()
    })
  }

  backgroundRender() {
    switch (this.currentLevel) {
      case 0:
        background(this.mood.anxiety[random(0, 5)]);
        break;
    }
  }
}