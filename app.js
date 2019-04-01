const scrapeSite = require('./ScrapeParse.js');

// console.log(scrapeSite);

let menPlayers = [];

scrapeSite()
  .then(function(players) {
    // console.log(players);
  sortPlayers(players);


  });

function sortPlayers(arr) {
  console.log('ddoes this run');
  let onePlayer = {};
    let name, seeding, rating;
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    // console.log(i);
    let counter = 0;



    if (i % 3 === 0 || i === 0) {
    // menPlayers.push({Name: arr[i]})
    name = arr[i];
    }
    if (i % 3 === 1 || i === 1) {
    seeding = arr[i]
    }
    if (i % 3 === 2 || i === 2) {
    rating = arr[i]
    onePlayer = {Name: name, Seeding: seeding, Rating: rating};
    // console.log(onePlayer);
    menPlayers.push(onePlayer);
    }


  //   if (counter === 3) {
  //   // onePlayer = {};
  //   menPlayers.push(onePlayer);
  //   counter = 0;
  //   console.log(onePlayer)
  // }



  }

  console.log(menPlayers);
}
console.log(menPlayers);
