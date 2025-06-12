import React, {useEffect, useState} from 'react';
import styles from './MyInput.module.scss';
import useDebounce from '../../../hooks/useDebounce';

interface MyInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    debounceDelay?: number;
}

const MyInput: React.FC<MyInputProps> = ({value, onChange, placeholder, debounceDelay = 500,}) => {
    const [localValue, setLocalValue] = useState(value);
    const debouncedValue = useDebounce(localValue, debounceDelay);

    useEffect(() => {
        onChange(debouncedValue);
    }, [debouncedValue]);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    return (
        <input
            className={styles.input}
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default MyInput;
