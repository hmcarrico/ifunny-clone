const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
    console.log('Connected to the database')
});

const path = require('path')
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 4055;
app.listen(PORT, () => console.log(`Your listening to chillest port around ${PORT}`));