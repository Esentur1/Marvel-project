import './charList.scss';
import PropTypes from 'prop-types';
import React, {useState, useEffect, useRef} from 'react';
import MarvelService from '../../services/MarvelService'; 
import Spinner from '../spinner/spinner';

const CharList = (props) => {
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        onCharList();
    }, [])

    const itemsRef = useRef([]);

    const setRef = (ref) => {
        if (ref) {
            itemsRef.current.push(ref);
        }
        console.log(itemsRef);
    }

    const focusCharSelected = (id) => {
        itemsRef.current.forEach(item => {
            item.classList.remove("char__item_selected");
        })
        itemsRef.current[id].classList.add("char__item_selected");
        itemsRef.current[id].focus();
    }

    const onCharList = () => {
        onRequest();
    }

    const onCharListLoaded = (newChars) => {
        let ended = false;

        if (newChars.length < 9) {
            ended = true;
        }
        setChars(chars => [...chars, ...newChars]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

    const onCharListLoading = () => {
        setNewItemLoading(true);
    }

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
    }

    const {onCharSelected} = props;

    const elements = chars.map((item, i) => {
        let imgStyle = "";
        if (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
            imgStyle = <img style ={{objectFit: "contain"}} src={item.thumbnail} alt="No character description"/>
        } else {
            imgStyle = <img style ={{objectFit: "cover"}} src={item.thumbnail} alt="No character description"/>
        }
        return (
            <CharItem 
            ref={setRef}
            name={item.name} 
            imgStyle={imgStyle} 
            key={item.id} 
            onCharSelected={() => onCharSelected(item.id)}
            focusCharSelected={() => focusCharSelected(i)}
            />
        )
    })
    
    const content = loading ? <Spinner/> : <ul className='char__grid'>{elements}</ul>

    return (
        <div className="char__list">
            {content}
            <button 
            className="button button__main button__long"
            disabled={newItemLoading}
            onClick={() => onRequest(offset)}
            style={{'display': charEnded ? 'none' : 'block'}}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
    
    
}

const CharItem = React.forwardRef((props, ref) => {
    const {name, imgStyle, onCharSelected, focusCharSelected} = props;
    return (
        <li className="char__item" 
        onClick={() => {
            onCharSelected()
            focusCharSelected()
        }} 
        ref={ref}
        >
            {imgStyle}
            <div className="char__name">{name}</div>
        </li>
    )
})

// class CharItem extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const {name, imgStyle, onCharSelected} = this.props;
//         return (
//             <li className="char__item" onClick={
//             () => 
//             {onCharSelected()}}>
//                 {imgStyle} <div className="char__name">{name}</div>
//             </li>
//         )
//     }

// }

CharList.propTypes = {
    onCharSelected: PropTypes.func
}

export default CharList;