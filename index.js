const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();
let argv = require('minimist')(process.argv.slice(2));

if (!argv._.length) {
    console.log('Missing search argument');
}
else {
    argv._.forEach(queryString => {
        hltbService.search(queryString)
            .then(result => result.forEach(
                entry =>
                    console.log(`${entry.name} - ${entry.gameplayMain} hrs`)
            ));
    });
}

