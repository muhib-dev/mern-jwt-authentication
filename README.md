# MERN stack authentication & authorization (production ready)
 Authentication & authorization with JWT access token, refresh token

### Authentication Features
- Role based authorization
- Storing refresh token HttpOnly cookie and DB
- Storing access tokens in memory React State (not localStorage)
- Refresh token rotation and reuse detection
- If reuse detected remove all refresh token from DB 

### Front-End
- React
- MUI styles
- Zod schema validation
- JSON Web Tokens (JWT)

### Back-End
- Express
- MongoDB (mongoose ODM)
- Zod schema validation
- JSON Web Tokens (JWT)
- Custom error handler
- Error and request logs generate and store in .txt file
- and some utils library (express-rate-limit, xss-clean, helmet, cors etc..)


![login](https://user-images.githubusercontent.com/58384619/221484745-278a48e9-eb3b-4d40-ad92-1797ddeb5795.jpg)
![signup](https://user-images.githubusercontent.com/58384619/221484758-8f2a708b-6f34-49a3-861d-263a1a89b92a.jpg)
