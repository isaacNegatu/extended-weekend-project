const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const hotelRouter = require('./routes/hotel.router');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/hotel', hotelRouter);

app.listen(PORT, function() {
    console.log('App is running on', PORT);
});