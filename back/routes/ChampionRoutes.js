import express from 'express';
import { getChampions, getChampion, createChampion, deleteChampion, updateChampion, insertChampions } from '../controllers/ChampionController.js';

const router = express.Router()

router.get('/', getChampions)
router.get('/seed', insertChampions)
router.post('/', createChampion)
router.get('/:id', getChampion)
router.delete('/:id', deleteChampion)
router.put('/:id', updateChampion)

export default router