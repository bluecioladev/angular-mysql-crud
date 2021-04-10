"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = __importDefault(require("../controllers/gamesControllers"));
class gamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/games', gamesControllers_1.default.list);
        this.router.get('/api/games/:id', gamesControllers_1.default.getOne);
        this.router.post('/api/games', gamesControllers_1.default.create);
        this.router.delete('/api/games/:id', gamesControllers_1.default.delete);
        this.router.put('/api/games/:id', gamesControllers_1.default.edit);
    }
}
const _gamesRoutes = new gamesRoutes();
exports.default = _gamesRoutes.router;
