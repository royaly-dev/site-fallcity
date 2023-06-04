const http = require("http")
const clientId = '';
const channelName = '';

fetch(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
  headers: {
    'Client-ID': clientId,
    'Authorization': 'Bearer VOTRE_JETON_D_ACCÈS'
  }
})
  .then(response => response.json())
  .then(data => {
    if (data.data.length > 0) {
      console.log(`${channelName} est en ligne !`);
    } else {
      console.log(`${channelName} est hors ligne.`);
    }
  })
  .catch(error => {
    console.log('Une erreur s\'est produite :', error);
  });
