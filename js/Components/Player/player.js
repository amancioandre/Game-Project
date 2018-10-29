class Player {
    constructor(name, gender){
        this.x = 0;
        this.y = 0;
        this.score = 0;
        this.name = name;
        this.gender = gender;
        this.character;
        this.swing; //Angle and velocity with wich the player will swing arms and legs
    }

    render(){
        //Render to the sketch
        rect(0, 0, 20, 20, 5);
    }

    // ###################### BUILD MODULE ############################


    // ###################### MOTION FUNCTIONS ########################
    jump() {
        
    }

    boost() {
        //if down arrow near wall, boost the other player jump
    }

    climb() {
        //how to grip and climb a wall? hold y position while something?

        //if up arrow near wall, then climb
    }

    walkForward() {
        let speed = 10;
        () => {
            this.x += speed;
        }()
    }

    walkBackward() {
        //walk backwards
    }
}