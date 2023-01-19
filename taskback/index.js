const express = require('express');
const app = express();
const router = require('./routes/indexRouter');
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use('/',router);


app.listen(8080,() => {
    console.log('servidor levantado');
});