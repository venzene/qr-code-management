const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = 'your-access-token-secret';
const REFRESH_TOKEN_SECRET = 'your-refresh-token-secret';
const ACCESS_TOKEN_EXPIRATION = '15m'; // Access token expiration time
const REFRESH_TOKEN_EXPIRATION = '7d'; // Refresh token expiration time

function issueAccessToken(payload) {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION });
}

function issueRefreshToken(payload) {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION });
}

module.exports = {
  issueAccessToken,
  issueRefreshToken
};