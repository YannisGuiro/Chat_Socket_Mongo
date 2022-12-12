import express from 'express';
// middlewares
import { encode } from '../models/middleware.js';

const router = express.Router();

router
  .get('/:userId/:token', encode, (req, res, next) => {
    // #swagger.tags = ['login']
    // #swagger.summary = "Used to login, returns an authentification token if successful"
    // #swagger.responses[200] = {description: "User is successfully connected"}
    return res
      .status(200)
      .json({
        success: true,
        authorization: req.authToken,
        user: req.user
      });
  });

export default router;
  