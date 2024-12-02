import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService'; 
import { useState, useEffect} from 'react';
import setContent from '../../utils/setContent';
import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, []);

    useEffect(() => {
        updateChar();
    }, [props.charId]);

    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }

        clearError();
        getCharacter(charId)
        .then(onCharLoaded)
        .then(() => setProcess('confirmed'))
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    return (
        <>
        <div className="char__info">
            {setContent(process, View, char)}
        </div>
        </>
    )
    
    
}

const View = ({data}) => {

    const {name, description, thumbnail, homepage, wiki, comics} = data;

    let imgStyle = "";
    if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
        imgStyle = <img style ={{objectFit: "contain"}} src={thumbnail} alt={name}/>
    } else {
        imgStyle = <img style ={{objectFit: "cover"}} src={thumbnail} alt={name}/>
    }

    return (
        <>
            <div className="char__basics">
                    {imgStyle}
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {   
                        comics.length === 0 ? <li className="char__comics-item" >This character does not have a comic book list</li>:
                        comics.length > 10 ? 
                        comics.slice(0, 10).map((item, i) => {return (
                            <li className="char__comics-item" key={i}>
                                {item.name}
                            </li>
                        )}) :
                        comics.map((item, i) => {
                            return (
                                <li className="char__comics-item" key={i}>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;