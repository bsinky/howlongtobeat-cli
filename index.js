const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();
let argv = require('minimist')(process.argv.slice(2));

let queryString = argv._[0];

hltbService.search(queryString)
    .then(result => console.log(result));
