"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tracker = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} ${req.method} ${req.url}`);
    next();
};
module.exports = tracker;
