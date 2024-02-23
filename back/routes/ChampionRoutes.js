import express from 'express';
import { getChampions } from '../controllers/ChampionController.js';

const router = express.Router()

router.get('/', getChampions)

export default router