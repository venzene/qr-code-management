# QR Code Management System
## Project Overview
The QR Code Management System is a Node.js application that enables users to generate, manage, and track static and dynamic QR codes. This system supports user authentication, QR code generation, and analytics for event tracking.

## Features
- User Authentication:<br>
- Signup and login using JWT-based authentication.<br>
- Rate-limiting to prevent brute-force attacks.<br>
- QR Code Management:<br>
- Generate static and dynamic QR codes.<br>
- Store metadata for QR codes (e.g., descriptions and campaigns).<br>
- Update URLs for dynamic QR codes.<br>
- Event Tracking:<br>
- Log QR code scans with device, location, and IP data.<br>
- View analytics like total scans, unique users, and location-based statistics.<br>
- Rate Limiting:<br>
- Protect sensitive APIs like authentication and QR code generation.<br>

## Technologies Used
- Backend: Node.js with Express.js<br>
- Database: MongoDB (with Mongoose ODM)<br>
- Authentication: JSON Web Tokens (JWT)<br>
- QR Code Generation: qrcode library<br>
- Middleware: express-rate-limit for rate limiting<br>
- Environment Configuration: dotenv<br>
