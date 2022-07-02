import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import fetch from 'node-fetch';

export const Pokemon = sequelize.define('pokemon',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        
        
    },
    stat:{
        type: DataTypes.INTEGER,
    },
    description:{
        type: DataTypes.STRING,
    },
},
{
    timestamps: false

});


for(let step = 1; step < 200; step++){
    const fetchData = async ()=>{
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/ability/${step}/`);
        const data = await res.json();
        const ret = await fetch(`https://pokeapi.co/api/v2/move/${step}/`);
        const power = await ret.json(); 
        datapokeapi(data,power)    
        
    } catch (error) {
        console.log(error)
    }      
}
fetchData()
}

const datapokeapi = (pokeapi,powerr)=>{
    
        Pokemon.bulkCreate([
            {name: pokeapi.name, description: pokeapi.generation.name, stat:powerr.power   }
            ]);
}

    


