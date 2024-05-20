import './charList.scss';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import MarvelService from '../../services/MarvelService'; 
import Spinner from '../spinner/spinner';

class CharList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        chars: [],
        loading: true,
        newItemLoading: false,
        offset: 210,
        charEnded: false
    }

    itemsRef = [];

    setRef = (ref) => {
        this.itemsRef.push(ref);
        console.log(this.itemsRef);
    }

    focusCharSelected = (id) => {
        this.itemsRef.forEach(item => {
            item.classList.remove("char__item_selected");
        })
        this.itemsRef[id].classList.add("char__item_selected");
        this.itemsRef[id].focus();
    }

    marvelService = new MarvelService();

    onCharList = () => {
        this.onRequest();
    }

    onCharListLoaded = (newChars) => {
        let ended = false;

        if (newChars.length < 9) {
            ended = true;
        }

        this.setState(({chars, offset}) => ({
            chars: [...chars, ...newChars],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    componentDidMount() {
        this.onCharList();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
    }



    render () {
        const {chars, loading, newItemLoading, offset, charEnded} = this.state;
        const {onCharSelected} = this.props;
    
        const elements = chars.map((item, i) => {
            let imgStyle = "";
            if (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
                imgStyle = <img style ={{objectFit: "contain"}} src={item.thumbnail} alt="No character description"/>
            } else {
                imgStyle = <img style ={{objectFit: "cover"}} src={item.thumbnail} alt="No character description"/>
            }
            return (
                <CharItem 
                ref={this.setRef}
                name={item.name} 
                imgStyle={imgStyle} 
                key={item.id} 
                onCharSelected={() => onCharSelected(item.id)}
                focusCharSelected={() => this.focusCharSelected(i)}
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
                onClick={() => this.onRequest(offset)}
                style={{'display': charEnded ? 'none' : 'block'}}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
    
}

// const CharItem = ({name, imgStyle, onCharSelected}) => {
//     return (
//         <li className="char__item" onClick={onCharSelected}>
//                 {imgStyle}
//                 <div className="char__name">{name}</div>
//         </li>
//     )
// }

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