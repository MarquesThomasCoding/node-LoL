import express from 'express';
import { getChampions, getChampion, createChampion } from '../controllers/ChampionController.js';

const router = express.Router()

router.get('/', getChampions)
router.post('/', createChampion)
router.get('/:id', getChampion)

export default router