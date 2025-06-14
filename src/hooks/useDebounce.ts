import React, {useEffect, useState} from "react";

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)
    useEffect(() => {
        const debounce = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        return () => clearTimeout(debounce)
    }, [value, delay])
    return debouncedValue
}

export default useDebounce