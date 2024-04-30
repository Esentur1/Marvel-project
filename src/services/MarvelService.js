

class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`) 
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?apikey=9fa8a4e7dd4fa0ac1bd263c9c97fcd0f`);
    } 
}

export default MarvelService;