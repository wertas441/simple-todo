import {colorClass} from "@/app/Dashboard";
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

    return (
        <div className={`space-y-2`}>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`${colorClass} rounded-lg w-full text-white placeholder-white px-3 py-1.5 ${className}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

            <p className={`text-xs text-red-500 mb-2`}>{error}</p>
        </div>
    )
}

export default memo(MainInput);