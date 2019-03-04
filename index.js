const { database } = require('./config.js');
const { Mob } = require('./models');

database.sync()
.then(() => Mob.create({
  name: 'Atrox'
}))
.then(atrox => {
  console.log(atrox.toJSON());
});
