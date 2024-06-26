

class MarvelService {
    _apiBase = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = "apikey=9fa8a4e7dd4fa0ac1bd263c9c97fcd0f";
    _baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`) 
        }

        return await res.json();
    }

    //getAllCharacters Получает списки комических персонажей с дополнительными фильтрами
    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(item => this._transformCharacter(item))
    } 

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    } 

    _transformCharacter = (char) => {
        if (char.description === "") {
            return {
                id: char.id,
                name: char.name,
                description: "No character description",
                thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
                homepage: char.urls[0].url,
                wiki: char.urls[1].url,
                comics: char.comics.items
            }
        } 

        if (char.description.length > 225) {
            return {
                id: char.id,
                name: char.name,
                description: char.description.slice(0, 225) + "...",
                thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
                homepage: char.urls[0].url,
                wiki: char.urls[1].url,
                comics: char.comics.items
            }
        }
        return {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService;