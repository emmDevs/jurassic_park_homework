const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
    dinosaur3 = new Dinosaur('diplodicus', 'herbivore', 25);
    dinosaur4 = new Dinosaur('coelophysis', 'carnivore', 15);
    dinosaur5 = new Dinosaur('t-rex', 'carnivore', 45);
    park = new Park("Jurassic Park", 10, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const expected = [dinosaur2];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur4);
    park.findDinosaurWithMostVisitors();
    const expected = dinosaur1.species;
    assert.strictEqual("t-rex", expected)
  });

  xit('should be able to find all dinosaurs of a particular species', function(species){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.findAllDinosaursInSpecies('t-rex');
    const actual = allDinosaursInSpecies.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.findDailyVisitors();
    const expected = dailyVisitors;
    assert.strictEqual(120, expected)

  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
