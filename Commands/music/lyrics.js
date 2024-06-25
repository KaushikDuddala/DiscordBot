const { APIKey } = require('../../config.json');

module.exports = {
    name:"lyricsearch",
    description:"Searchs a lyric",
    cooldown:10,
    args:true,
    execute(message, args) {
      const fetch = require('node-fetch');
      const unirest = require("unirest");
      const searchlol = args.join("%20")
  const lol = fetch(`https://api.genius.com/search?q=${searchlol}`, {
         "method": "GET",
         "headers": {
                "Authorization": APIKey,
                "x-rapidapi-host": "api.genius.com"
         }}).then(response => response.json());
         console.log(lol)
    }
  };