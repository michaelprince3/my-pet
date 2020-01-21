const myDog = {
    name: "Jager",
    type: "lab",
    nicknames: ["bubba", "crazy", "lazy"],
    age: 10,
    favoriteToys: [],
    play: function(toy) {
        if (toy.includes("squeaky")){
            console.log("Adding " + toy + " to favorite toys.")
            this.favoriteToys.push(toy);
        }
    },
    bark: function() {
        console.log("WOOF!")
    },
    whine: function() {
        console.log("whine")
    },
    growl: function() {
        console.log("Growl!")
    },

}

myDog.bark()
myDog.play("squeaky mouse")
