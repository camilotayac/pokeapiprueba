import {Pokemon } from "../models/pokemon.js";


export const getPokemon = async (req,res) =>{
    try {
        const pokemon = await Pokemon.findAll()
        res.json(pokemon)
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const createPokemon = async (req,res) =>{
    const {name,stat,description} = req.body
    try {
        const newPokemon = await Pokemon.create({
            name,
            stat,
            description
        })
    
        res.json(newPokemon)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}

export const getPokemonName = async (req,res)=>{
    const {name}= req.params;
    const pokemonName = await Pokemon.findAll({
        where: {name},
    });
    res.json(pokemonName)
}

export const getPokemonStat = async (req,res) =>{
    const {stat}= req.params;
    const pokemonStat = await Pokemon.findAll({
        where: {stat},
    });
    res.json(pokemonStat)
}

