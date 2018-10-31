class Topology {
  constructor(WIDTH, HEIGHT, start_position) {
    this.amplitude = new p5.Amplitude();
    
    this.start_position = start_position; // X start position
    this.width = 20; //Bars Width
    this.height = HEIGHT; //Map Amplitude Levels to the Canvas Height

    this.level = []; //Loaded Musics Array
    this.bars = [];
    this.mood =  //Music Color Moods and Forms Array of Objects
      {
        anxiety:       ['#23002F', '#221E53', '#1A595E', '#188B52', '#2F9E4F'],
        angry:         ['#330A31', '#550036', '#800037', '#C60042', '#ED2840'],
        depression:    ['#000000', '#232323', '#3E3E3A', '#886069', '#25232F'],
        exihiliration: ['#CB3338', '#E67F2C', '#F2CA2B', '#0B8B74', '#6A1832'],
      };
  }

  levelLoader(levelArray) {
    levelArray.forEach((level) => {
      this.level.push({
        music: loadSound(level.path),
        mood: level.mood,
        name: level.name
      });
    })
  }

  renderBars() {
    if(this.amplitude.getLevel() !== 0){
      this.bars.push({y: map(this.amplitude.getLevel(), 0, 1, 0, this.height), x: this.start_position += this.width})
    }
    if(this.bars.length > 0){
      this.bars.forEach(bar => {
        rect(bar.x, 0, this.width, -bar.y);
      })
    }
  }

  backgroundRender() {
    let time = this.level[0].music.currentTime();
    let totalTime = this.level[0].music.duration();
    let index = 0;

    if(time/totalTime <= 0.20){
      index = 0;
    } else if(time/totalTime > 0.20 && time/totalTime <= 0.40){
      index = 1;
    } else if(time/totalTime > 0.40 && time/totalTime <= 0.60){
      index = 2;
    } else if(time/totalTime > 0.60 && time/totalTime <= 0.80){
      index = 3;
    }else if(time/totalTime > 0.80){
      index = 4;
    }
    background(this.mood.anxiety[index]);
  }

  foregroundRender() {
    //Colocar formas para renderizar.
  }
}