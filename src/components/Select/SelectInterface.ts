export interface SelectProps {
    name?: string;
    value?: string;
    options: Array<{ label: string; value: string }>;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    labelClassName?: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
}