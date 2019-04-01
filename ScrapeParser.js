const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://512beach.com/points/men/';


const parsePlayers = function() {
  return rp(url)
  .then(function(html) {
    //success
    // console.log(html);
    // console.log($('<td>', '<table class="pointsTable w100">', html))
    // console.log($('<table class="pointsTable w100">', html).length)
        // console.log($('td', html).text());

        var total = $('td', html).text().length;
        console.log(total);

        // let players = [];
        // players.push($('td', html).text().match(/[\s]+|[a-zA-Z\s-]+|[0-9\s]+/g))
        // players.push($('td', html).text().match(/([a-zA-Z])+(\s?)([a-zA-Z]+) ([a-zA-Z]+)|([a-zA-Z])+(\s?)([a-zA-Z]+)|[0-9]+/g))
        let players = ($('td', html).text().match(/([a-zA-Z])+(\s?-?)([a-zA-Z]+) ([-a-zA-Z]+)|([a-zA-Z])+(\s?-?)([a-zA-Z]+)|[0-9]+/g))


        // console.log(players);
        return players;
  })
  .catch(function(err) {
    console.log('error: ' + err);
  });
}
module.exports = parsePlayers;

// parsePlayers();
