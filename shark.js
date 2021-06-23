class Shark{
    constructor(){
        this.image = loadImage("s-removebg-preview.png");
    }
    
    display(){
        image(this.image, pox, pos, 300, 300);
    }
    }