[
    'da',
    'en'
].forEach(function(lang) {
    module.exports[lang] = require('./lang/'+lang);
});