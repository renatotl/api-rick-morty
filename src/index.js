require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDataBase = require('./database/database');
const charactersRoutes = require('./characters/characters.routes');
const swaggerRoute = require('./swagger/swagger.routes');

const port = 3001;
const app = express();

connectDataBase();

app.use(cors());
app.use(express.json());

app.use('/characters/', charactersRoutes);
app.use('/api-docs', swaggerRoute);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
