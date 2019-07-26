const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const config = require('config');
const db = config.get('mongoURI');

const PORT = process.env.PORT || 4321;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views, views');

async function start() {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false
    });
    app.listen(PORT, () => {
      console.log(`Server Launch on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
