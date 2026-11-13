const crypto = require("crypto");

function generateRandomString(length = 16) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[crypto.randomInt(chars.length)];
  }

  return result;
}
const messages = [
  "nthada mone ngl kalaje njn agge mulli poyalo",
  "oo eda buddhi thanne ni oru vanam thannee",
  "ayyoda njn ini nth cheyum shoo ni oru budhiman thanne",
  "ni agge sheru bhaoi ayenn ketalloda",
  "we are not shutting up ❌ but we are shutting you ✅",
  " now we are louder but can hear - shabdham und but kelkan pattula",
  "oodum kuthira chadum kuthira bellam kanda nikkum kuthira",
  "nedu 10cr sheru bhai de account il ninn join now",
  "sheru bhai started a new cryto called sheru crpto and it is going to be the next big thing",
  "we are back but this time louder ❌ we are going but this time deafer ✅",
];

function generateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const selectedMessage = messages[randomIndex];
  value = selectedMessage + " " + generateRandomString();

  return value;
}


module.exports = generateMessage;