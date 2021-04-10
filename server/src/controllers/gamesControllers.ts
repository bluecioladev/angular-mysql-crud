import { request, Request, Response } from 'express';
import pool from '../database'


class GamesController {

   public async list(req: Request, res: Response) {
      try {
         const games = await pool.query('SELECT * FROM GAMES');
         res.json(games);
      } catch (err) {
         console.log(err);

      }
   }



   public async getOne(req: Request, res: Response): Promise<any> {
      try {
         const { id } = req.params;
         const games = await pool.query('SELECT * FROM GAMES WHERE ID = ?', [id]);
         if (games.length > 0) {
            return res.json(games[0]);
         }

         res.status(404).json({ message: 'game does not exits' });

      } catch (err) {
         console.log(err);

      }
   }


   public async create(req: Request, res: Response): Promise<void> {
      try {
         await pool.query(' INSERT INTO GAMES SET ?', [req.body]);
         res.json({ message: 'Game Saved' });
      } catch (err) {
         console.log(err);

      }

   }


   public async delete(req: Request, res: Response): Promise<void> {
      try {
         const { id } = req.params;
         await pool.query('DELETE FROM GAMES WHERE ID = ?', [id])
         res.json({ message: 'game deleted' });
      } catch (err) {
         console.log(err);

      }
   }


   public async edit(req: Request, res: Response):Promise<void> {
   try{
      const {id} = req.params;
      await pool.query('UPDATE GAMES SET ? WHERE  ID = ? ', [req.body,id]);
      res.json({message:'game updated'});
   }catch(err){
      console.log(err);
      
   }
   }

}

const _gamesController = new GamesController();

export default _gamesController;