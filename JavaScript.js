// // var box = [];
// // box['material'] = 'cardboard';
// // box[0] = 'meow';
// // box['%$'] = 'testing 123';
// // box.push('hello');

// // console.log(box);

// // let game = {};

// // game.murderer = '??';

// // game.weapons = [
// //   { type: 'gun', location: 'lab' },
// //   { type: 'hammer', location: 'garden' },
// // ];

// // game.characters = [];

// // game.characters[0] = 'Miss Scarlet';

// // game.characters.push('Mr.jim');
// // console.log(game);

// // const { name, weapon, rusty } = {
// //   name: 'Rusty',
// //   room: 'kitchen',
// //   weapon: 'candlestick',
// // };

// // const { name, weapon, room } = {
// //   name: 'Rusty',
// //   room: 'kitchen',
// //   weapon: 'candlestick',
// // };
// // console.log(name);
// // console.log(room);
// const game = {
//   suspects: [
//     {
//       name: 'rusty',
//       color: 'orange',
//     },
//     {
//       name: 'miss scarlett',
//       color: 'red',
//     },
//   ],
// };

// var suspects = [
//   {
//     name: 'rusty',
//     color: 'orange',
//   },
//   {
//     name: 'miss scarlett',
//     color: 'red',
//   },
// ];
// // for (let i = 0; i < game.suspects.length; i++) {
// //   console.log(game.suspects[i]);
// // }

// function gameLoop() {
//   for (let i = 0; i < game.suspects.length; i++) {
//     for (var key in game.suspects[i]) {
//       console.log(key);
//       if (game.suspects[i][key] === 'rusty') {
//         console.log(`it was you Rusty!! `);
//       }
//     }
//   }
// }

// gameLoop();

// const firstColor = game.suspects[0].color;
// console.log(`oi, ${firstColor}`);

// const [color1, color2] = [suspects[0].color, suspects[1].color];
// console.log(color1, color2);

// function CreateSuspectObjects(name) {
//   return {
//     name: name,
//     color: name.split(' ')[1],
//     speak() {
//       console.log('my name is ', name);
//     },
//   };
// }

// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// // let a = CreateSuspectObjects('Miss Scarlet');

// // console.log(a);

// suspects.forEach(CreateSuspectObjects(suspects));

const weapons = ['candlestick', 'lead pipe', 'revolver'];

// const makeBroken = function(item){
//   return `broken ${item}`;
// }

let brokenWeapon = weapons.map((weapon) => `broken ${weapon}`);
console.log(brokenWeapon);
