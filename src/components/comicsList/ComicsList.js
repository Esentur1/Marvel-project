import './comicsList.scss';
import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService'; 
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const ComicsList = () => {
    const [comics, setComics] = useState([]);
    const [newComicsLoading, setNewComicsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onComicsList();
    }, [])

    const onComicsList = () => {
        onRequest(offset, true);
    }

    const onRequest = (offset, initial) => {
        initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded);
    }

    const onComicsListLoaded = (newComics) => {
        let ended = false;

        if (newComics.length < 8) {
            ended = true;
        }

        setComics(comics => [...comics, ...newComics]);
        setNewComicsLoading(newComicsLoading => false);
        setOffset(offset => [offset + 8]);
    }
    console.log(comics);

    const elements = comics.map((item, i) => {
        let imgStyle = "";
        item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ?
            imgStyle = <img style={{objectFit: "contain"}} src={item.thumbnail} alt='comic' className="comics__item-img"/> :
            imgStyle = <img style={{objectFit: "cover"}} src={item.thumbnail} alt='comic' className="comics__item-img"/>
        return (
            <li className="comics__item" key={i}>
                <Link to={`/Marvel-project/comics/${item.id}`}>
                    {imgStyle}
                    <div className="comics__item-name">{item.title}</div>
                    <div className="comics__item-price">{item.price}$</div>
                </Link>
            </li>
        )
    })

    const errorMessage = error ? <ErrorMessage/> : null;
    const content = loading && !newComicsLoading ? <Spinner/> : <ul className="comics__grid">{elements}</ul>

    return (
        <div className="comics__list">
            {errorMessage}
            {content}
            <button 
            className="button button__main button__long"
            onClick={() => onRequest(offset)}
            disabled={newComicsLoading}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;