import React from 'react';

function InputMessage({ wrongMessage, green }) {

    return (
        <p className={`inputMessage me-4 ${green ? 'inputMessageGreen' : ''}`}>{wrongMessage}</p>
    );
}

export default InputMessage;