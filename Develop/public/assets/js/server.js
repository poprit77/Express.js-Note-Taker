const express = require('express');
const htmlRoutes = require('./htmlRoute')
// const termData = require('./index.js');
const apiRoutes = require('./apiRoute')
const PORT = 3101;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>{
  console.log(`listening on ${PORT}`);
});

module.exports = app;