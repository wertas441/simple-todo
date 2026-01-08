import Link from "next/link";
import {colorClass} from "@/app/Dashboard";

interface IProps {
    label: string;
    href: string;
    className?: string;
}

export default function LinkBtn({label, href, className = ''}: IProps) {

    return (
        <Link
            href={href}
            className={`${colorClass} rounded-lg text-white px-3 py-1.5 cursor-pointer ${className}`}
        >
            {label}
        </Link>
    )
}
