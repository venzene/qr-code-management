const express = require('express');
const router = express.Router();
const qrCodeService = require('../services/qrCodeService');
const authenticate = require('../middleware/authenticate'); // Middleware for user authentication

// Generate Static QR Code
router.post('/static', authenticate, async (req, res) => {
  try {
    const { initialURL, metadata } = req.body;
    const qrCode = await qrCodeService.generateStaticQRCode(req.user.id, initialURL, metadata);
    res.status(201).json(qrCode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Generate Dynamic QR Code
router.post('/dynamic', authenticate, async (req, res) => {
  try {
    const { initialURL, metadata } = req.body;
    const qrCode = await qrCodeService.generateDynamicQRCode(req.user.id, initialURL, metadata);
    res.status(201).json(qrCode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Dynamic QR Code
router.put('/:qrID/update', authenticate, async (req, res) => {
  try {
    const { qrID } = req.params;
    const { newURL } = req.body;
    const updatedQRCode = await qrCodeService.updateDynamicQRCode(qrID, newURL);
    res.status(200).json(updatedQRCode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get QR Code Details
router.get('/:qrID', authenticate, async (req, res) => {
  try {
    const { qrID } = req.params;
    const qrCode = await qrCodeService.getQRCodeDetails(qrID);
    res.status(200).json(qrCode);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// List QR Codes by User
router.get('/my-codes', authenticate, async (req, res) => {
  try {
    const qrCodes = await qrCodeService.listQRCodesByUser(req.user.id);
    res.status(200).json(qrCodes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete QR Code
router.delete('/:qrID', authenticate, async (req, res) => {
  try {
    const { qrID } = req.params;
    await qrCodeService.deleteQRCode(qrID);
    res.status(200).json({ message: 'QR Code deleted successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
