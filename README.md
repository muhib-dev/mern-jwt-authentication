# MERN stack authentication & authorization
 Authentication & authorization with JWT access token, refresh token

### Features

- Storing refresh token HttpOnly cookie and DB
- Storing access tokens in memory React State (not localstorage)
- Refresh token rotation and reuse detection
- If reuse detected remove all refresh token from DB 
