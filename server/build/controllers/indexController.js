"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'la api is /api/games' });
    }
}
exports._indexController = new IndexController();
