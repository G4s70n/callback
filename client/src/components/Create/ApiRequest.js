import axios from "axios";


export const getImages = async (prompt) => {
    try {
        const response = await axios.post('/pokemons/images', { prompt });
        return response.data;
    } catch (error) {
        return 'error'
        console.error(error);
    }
};

export const createPokemon = async (obj) => {
    try {
      const response = await axios.post('/pokemons/create', obj);
      console.log(response.data);
      return response.data;
    } catch (error) {
        return 'Error al crear el pokemon' + error;
        console.error(error);
    }
};










