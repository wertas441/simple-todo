import {colorClass} from "@/app/Dashboard";

interface IProps {
    id: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;

}

export default function MainInput({ id, type = 'text', placeholder = '', className = '', value, onChange }: IProps) {

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={`${colorClass} rounded-lg w-full text-white placeholder-white px-3 py-1.5 ${className}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}