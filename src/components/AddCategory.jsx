import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    //event.target.value el estado cambia cada instante
    const onInputChanged = ({target}) => {
        //console.log(target.value)

        setInputValue( target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length < 2) return;
        
        onNewCategory(inputValue.trim());
        setInputValue('');
        
    }

    return (
        <form onSubmit={ onSubmit }>

            <input     
                type={'text'}
                placeholder={'Buscar Gifts'}
                value = {inputValue}
                onChange = {onInputChanged}
            />
        </form>
    )
}
