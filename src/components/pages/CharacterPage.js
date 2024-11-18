import './characterPage.scss'
import { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import AppBanner from '../appBanner/AppBanner';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import useMarvelService from '../../services/MarvelService';

const CharacterPage = () => {
    const [character, setCharacter] = useState(null);
    const {characterId} = useParams();
    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateCharacter();
    }, [])

    useEffect(() => {
        updateCharacter();
    }, [characterId])

    const updateCharacter = () => {
        if (!characterId) {
            return;
        }
        clearError();
        getCharacter(characterId)
            .then(onCharacterLoaded)
    }

    const onCharacterLoaded = (character) => {
        setCharacter(character);
    }
    console.log(character);

    const content = character ? <ViewChatacter character={character}/> : null

    return (
        <>
        <AppBanner/>
        <div className='single-character'>
            {content}
        </div>
        </>
    )
}

const ViewChatacter = ({character}) => {
    const {name, description, thumbnail} = character;
    return (
        <>
            <img src={thumbnail} className='single-character__img'></img>
            <div className='single-character__info'>
                <h2 className='single-character__name'>{name}</h2>
                <p className='single-character__description'>{description}</p>
            </div>
            
        </>
    )
}

export default CharacterPage;