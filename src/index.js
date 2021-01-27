const color = require('chalk');
const emoji = require('node-emoji');

const stars = emoji.get('stars');
const star2 = emoji.get('star2');
const sun = emoji.get('sun_with_face');
const tree = emoji.get('evergreen_tree');
//const elephant = emoji.get('elephant');
//const ufo = emoji.get('flying_saucer');

function magic(data) {
  const methods = Object.keys(data.__proto__);
  console.log(
    `${stars}|| M${star2}GIC METHODS: ||${stars} \n ${methods.map(
      (method) => method + '\n'
    )} ${stars}||${stars}||${stars}`
  );
}

function log(data) {
  let name = Object.keys(data)[0];
  let dataStr = `${sun} || CONSOLE LOG FOR ${color.blueBright(name)}: `;
  console.log(dataStr, data[name], `||${tree}`);
}

module.exports = {
  magic,
  log,
};
