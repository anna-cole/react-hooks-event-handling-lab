import React from "react";

function Keypad() {
    return (
        <div>
            <input 
                type='password'
                onChange={() => console.log('Entering password...')}  placeholder='Password'
            />
        </div>
    )
}

export default Keypad;