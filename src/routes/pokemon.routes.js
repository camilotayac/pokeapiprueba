import { Router } from "express";
import {createPokemon, getPokemon, getPokemonName,getPokemonStat } from "../controllers/pokemon.controller.js";


const router = Router();

router.get('/pokemon', getPokemon);
router.post('/pokemon',createPokemon);
router.get('/pokemon/stat/:stat', getPokemonStat);
router.get('/pokemon/name/:name', getPokemonName);

export default router;