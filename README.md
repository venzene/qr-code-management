# QR Code Management System
## Project Overview
The QR Code Management System is a Node.js application that enables users to generate, manage, and track static and dynamic QR codes. This system supports user authentication, QR code generation, and analytics for event tracking.

## Features
User Authentication:
Signup and login using JWT-based authentication.
Rate-limiting to prevent brute-force attacks.
QR Code Management:
Generate static and dynamic QR codes.
Store metadata for QR codes (e.g., descriptions and campaigns).
Update URLs for dynamic QR codes.
Event Tracking:
Log QR code scans with device, location, and IP data.
View analytics like total scans, unique users, and location-based statistics.
Rate Limiting:
Protect sensitive APIs like authentication and QR code generation.

## Technologies Used
Backend: Node.js with Express.js
Database: MongoDB (with Mongoose ODM)
Authentication: JSON Web Tokens (JWT)
QR Code Generation: qrcode library
Middleware: express-rate-limit for rate limiting
Environment Configuration: dotenv
