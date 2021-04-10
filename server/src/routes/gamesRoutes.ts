import { Router } from 'express';
import _gamesController from '../controllers/gamesControllers'


class gamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/api/games', _gamesController.list);
        this.router.get('/api/games/:id', _gamesController.getOne)
        this.router.post('/api/games', _gamesController.create);
        this.router.delete('/api/games/:id', _gamesController.delete)
        this.router.put('/api/games/:id', _gamesController.edit);
    }

}
const _gamesRoutes = new gamesRoutes();
export default _gamesRoutes.router;
