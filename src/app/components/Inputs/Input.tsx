interface InputProps {
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, required = false, type = 'text' }) => {
    return (
        <div className="w-full flex justify-end items-center relative">
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                value={value}
                name={placeholder}
                className="border-b-2 focus:outline-none text-sm border-Gray py-3 w-full"
            />
        </div>
    )
}
export default Input