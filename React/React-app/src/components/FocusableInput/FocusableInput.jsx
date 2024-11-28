import React, { useEffect, useRef } from 'react';

const FocusableInput = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return <input type="text" ref={inputRef} placeholder="Focus on mount" />;
}

export default FocusableInput