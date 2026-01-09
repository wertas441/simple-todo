import {memo} from "react";

interface IProps {
    id: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    error?: string | null;
}

function MainInput({ id, type = 'text', placeholder = '', className = '', value, onChange, error}: IProps) {

    const describedBy = error ? `${id}-error` : undefined;
    const inputStateClass = error ? 'ring-red-400/40 focus:ring-red-400/60' : '';

    return (
        <div className={`space-y-2`}>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`input ${inputStateClass} ${className}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-invalid={Boolean(error)}
                aria-describedby={describedBy}
            />

            {error && (
                <p id={describedBy} className="error">{error}</p>
            )}
        </div>
    )
}

export default memo(MainInput);