import React, { useRef } from 'react';

/*
    Задание Автофокус на поле ввода

    1) Реализовать фокус на инпут при нажатии на кнопку 
    2) Использовать useRef

*/

function InputFocus() {

    const inputRef = useRef()

    const focusInput = () => [
        inputRef.current.focus()
    ]

    return (
        <div className='column'>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus my input</button>        
        </div>
    );
}

export default InputFocus;
