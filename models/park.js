const Park = function(name, ticketPrice, collectionOfDinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
};

Park.prototype.numberOfDinosaurs = function(){
    return this.collectionOfDinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1)
}

Park.prototype.findDinosaurWithMostVisitors = function(){
    let mostVisitors = 0
    for(dinosaur in this.collectionOfDinosaurs){
        if(dinosaur.guestsAttractedPerDay > mostVisitors){
            mostVisitors = dinosaur.guestsAttractedPerDay
        };
    for(dinosaur in this.collectionOfDinosaurs){
        if(dinosaur.guestsAttractedPerDay === mostVisitors){
            return dinosaur.species;
        };
    };
    };

    };

// Park.prototype.findAllDinosaursInSpecies = function(species){
//     let allDinosaursInSpecies = []
//     for(dinosaur in this.collectionOfDinosaurs){
//         if(dinosaur.species === species){
//             allDinosaursInSpecies.push(dinosaur.species);
//         };
//     return allDinosaursInSpecies    
//     };
// };


Park.prototype.findDailyVisitors = function(){
    let getDailyVisitors = [];
    for(dinosaur in this.collectionOfDinosaurs){
        getdinosaur.guestsAttractedPerDay
    }
    // const getDailyVisitors = Object.values(dinosaur.guestsAttractedPerDay)
    const dailyVisitors = getDailyVisitors.reduce();
    return dailyVisitors;
};
module.exports = Park;