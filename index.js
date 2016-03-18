var stockRepository = require('./stockRepository');
var app = require('./app')(stockRepository);

app.listen(process.env.PORT || 3001, function () {
    console.log('Example app listening on port 3000!');
});