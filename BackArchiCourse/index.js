// init server express
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect( `${process.env.MONGO_URL}`, {useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...'));
const pkmRouter = require('./router/pokemonRouter');
const userRouter = require('./router/userRouter');


//cors  

const cors = require('cors');
app.use(cors());

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/pkm', pkmRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send ( 'Hello World!' );
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

