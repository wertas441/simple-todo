import Link from "next/link";

interface IProps {
    label: string;
    href: string;
    className?: string;
    variant?: 'default' | 'primary';
    fullWidth?: boolean;
}

export default function LinkBtn(
    {
        label,
        href,
        className = '',
        variant = 'default',
        fullWidth = true
    }: IProps) {

    const variantClass = variant === 'primary' ? 'btn btn-primary' : 'btn';
    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <Link
            href={href}
            className={`${variantClass} ${widthClass} ${className}`}
        >
            {label}
        </Link>
    )
}
