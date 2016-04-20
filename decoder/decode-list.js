var words_list = require('./words-list.js')
var super_decoder = require('./super-decoder.js')

console.log(super_decoder(words_list[0],"backwards"));
console.log(super_decoder(words_list[1],"forwards"));
console.log(super_decoder(words_list[2],"backwards"));
console.log(super_decoder(words_list[3],"even-forwards"));
console.log(super_decoder(words_list[4],"even-backwards"));
