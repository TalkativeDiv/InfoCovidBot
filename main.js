const Discord = require("discord.js");
const dotenv = require("dotenv"); // getting dotenv for env var support
const client = new Discord.Client();
const axios = require("axios");

client.on("ready", () => {
  console.log("Bot is locked and loaded!");
});
client.on("message", (msg) => {
  //checking if bot
  if (msg.author.bot) return;
  let content = msg.content.toUpperCase();
  switch (content) {
    //ping/pong
    case "!PING":
      msg.reply("pong");
      break;
    case "!PONG":
      msg.reply("ping");
      break;
    // Covid stuff
    case "!CASES":
      axios
        .get("https://corona.lmao.ninja/v2/all/")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESUSA":
      axios
        .get("https://corona.lmao.ninja/v2/countries/USA")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESINDIA":
      axios
        .get("https://corona.lmao.ninja/v2/countries/india/")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESNIGERIA":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Nigeria")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESBRAZIL":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Brazil")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESBANGLADESH":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Bangladesh")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESRUSSIA":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Russia")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESMEXICO":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Mexico")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESJAPAN":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Japan")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESETHIOPIA":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Ethiopia")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESPHILIPPINES":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Philippines")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESEGYPT":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Egypt")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESVIETNAM":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Vietnam")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESUK":
      axios
        .get("https://corona.lmao.ninja/v2/countries/UK")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESFRANCE":
      axios
        .get("https://corona.lmao.ninja/v2/countries/France")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESSKOREA":
      axios
        .get("https://corona.lmao.ninja/v2/countries/S.%20Korea")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESCANADA":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Canada")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESPAKISTAN":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Pakistan")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESCANADA":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Canada")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESPAKISTAN":
      axios
        .get("https://corona.lmao.ninja/v2/countries/Pakistan")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case "!CASESCHINA":
      axios
        .get("https://corona.lmao.ninja/v2/countries/China")
        .then(function (response) {
          msg.reply(
            `There is ${response.data.cases} cases, ${response.data.deaths} deaths, ${response.data.recovered} recovered!`
          );
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
  }
});
dotenv.config();
client.login(process.env.TOKEN);
