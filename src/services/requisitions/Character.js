import api from "../api";

class Character{
    async getCharacter(page){
        try{    
            const { data } = await api.get(`/people/?page=${page}`)
            return data
        }
        catch(error){
            console.log(error)
            return
        }
    }
}

export default new Character()