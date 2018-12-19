var vehicle = {
    name: 'swift',
    type: 'car',
    currentPosition: 0,
    getPosition: function(){
        return this.currentPosition;
    },
    move: function(){
        this.currentPosition = this.currentPosition + 1;
    },
    reset: function(){
        this.currentPosition = 0;
    },
}

vehicle.move();  //increment value by 1

// console.log(vehicle.getPosition());

vehicle.move(); // 2

vehicle.reset();
console.log(vehicle.getPosition()); //0  //reset value to zero
