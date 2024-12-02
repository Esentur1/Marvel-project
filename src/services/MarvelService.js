import useHttp from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError, process, setProcess} = useHttp();
    const _apiBase = "https://gateway.marvel.com:443/v1/public/";
    const _apiKey = "apikey=9fa8a4e7dd4fa0ac1bd263c9c97fcd0f";
    const _baseOffset = 210;
    const _baseComicsOffset = 0;

    //getAllCharacters Получает списки комических персонажей с дополнительными фильтрами
    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(item => _transformCharacter(item));
    } 

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }
    
    const getAllComics = async (offset = _baseComicsOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(item => _transformComic(item));
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComic(res.data.results[0]);
    }

    const findNameCharacter = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`)
        if (res.data.results.length === 0) {
            return {
                name: "not found"
            }
        }
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
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

    const _transformComic = (comic) => {
        return {
            id: comic.id,
            title: comic.title,
            description: !comic.description ? "No character description" 
                : comic.description.length > 255 
                    ? comic.description.slice(0, 255) + "..." 
                    : comic.description,
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            price:comic.prices[0].price,
            page: comic.pageCount
        }
    }

    return {loading, 
        error, 
        process,
        setProcess, 
        getAllCharacters, 
        getCharacter, 
        clearError, 
        getAllComics, 
        getComic, 
        findNameCharacter};
}

export default useMarvelService;