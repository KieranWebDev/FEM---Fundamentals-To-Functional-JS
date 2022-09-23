var box = [];
box['material'] = 'cardboard';
box[0] = 'meow';
box['%$'] = 'testing 123';
box.push('hello');

console.log(box);

let game = {};

game.murderer = '??';

game.weapons = [
  { type: 'gun', location: 'lab' },
  { type: 'hammer', location: 'garden' },
];

game.characters = [];

game.characters[0] = 'Miss Scarlet';

game.characters.push('Mr.jim');
console.log(game);
