

const express = require('express');
const cors = require('cors');
const db = require('./config/db');


const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/genero', require('./routes/genero'));
app.use('/director', require('./routes/director'));
app.use('/productora', require('./routes/productora'));
app.use('/tipo', require('./routes/tipo'));
app.use('/media', require('./routes/media'));

;






