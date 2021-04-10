import { Router } from 'express';
import {_indexController} from '../controllers/indexController';

class indexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',_indexController.index );
        
    }

}
const _indexRoutes = new indexRoutes();
export default _indexRoutes.router;
