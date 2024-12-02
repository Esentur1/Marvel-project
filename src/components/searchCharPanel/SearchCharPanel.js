import {useState, useEffect, useRef} from 'react';
import useMarvelService from '../../services/MarvelService';
import "./searchCharPanel.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link}  from "react-router-dom"
import * as Yup from 'yup'

// const validate = values => {
//     const errors = {};

//     if (!values.name) {
//         errors.name = "This field is required"
//     } 

//     return errors;
// }

const SearchCharPanel = (props) => {
    const [char, setchar] = useState({});
    const [foundCharacterMessage, setfoundCharacterMessage] = useState(false);
    const [notField, setNotField] = useState(false);
    const {loading, error, findNameCharacter} = useMarvelService();


    const findEndChar = (char) => {
        setchar(char);
        console.log(char.name)
        if (char.name === "not found") {
            setfoundCharacterMessage(true)
        } else {
            setfoundCharacterMessage(false)
        }
    }
    const onRequest = (name) => {
        findNameCharacter(name)
            .then(findEndChar)
    }
    // const messageFoundResponse = foundCharacterMessage 
    //     ? <div className='searchcharpanel__validate-error'>The character was not found. Check the name and try again</div> 
    //         : <div className='searchcharpanel__validate-error'>There is! Visit page?</div> 
    const messageFoundResponse = (char, message) => {
        if (message) {
            return <div className='searchcharpanel__validate-error'>The character was not found. Check the name and try again</div>
        } else if (Object.keys(char).length === 0 ) {
            return null
        }
        return (
        <>
        <div className='searchcharpanel__positive'>There is! Visit {char.name} page?</div>
        <Link className="button button__secondary searchcharpanel__link" to={`/Marvel-project/${char.id}`}>
            <div className="inner">TO PAGE</div>
        </Link>
        </>
        )
    }
    return (
        <Formik
        initialValues = {{
            name: ""
        }}
        validationSchema = {Yup.object({
            name: Yup.string().required('This field is required')
        })}
        onSubmit = {values => onRequest(values.name)}
        >
            <Form className="searchcharpanel">
                <label className="searchcharpanel__label" htmlFor="search">Or find a character by name:</label>
                <Field 
                className="searchcharpanel__input" 
                type="text" 
                placeholder='Enter name' 
                id='name'
                name='name'
                />
                <button 
                className="button button__main searchcharpanel__button"
                type="submit"
                >
                    <div className="inner">FIND</div>
                </button>
                {messageFoundResponse(char, foundCharacterMessage) 
                ? messageFoundResponse(char, foundCharacterMessage) 
                : <ErrorMessage className='searchcharpanel__validate-error' name="name" component='div'/>}
                
            </Form>
        </Formik>
    )
}

export default SearchCharPanel;

