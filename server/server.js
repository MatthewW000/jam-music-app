const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(bodyParser.json)

app.post('login', (req, res) => {
  const code = req.body.code
  const spotifyAPI = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'b64996034eae43199ea1e3296211e4d9',
    clientSecret: 'ba580907380547c4b24b1410bb7fdb10'
  })
  spotifyAPI.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expires_in: data.body.expires_in,
    })
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(400)
  })
})

app.listen(3002)