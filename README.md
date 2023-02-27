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
