import "./InputField.scss";

interface Props {
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    value: string;
    name?: string;
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>|any;
    required?: boolean;
}

const InputField = ({ type, value, name, placeholder, setValue, required }: Props) => {
    return (
        <label className="inputFieldWrapper">
            <input
                type={type}
                className="inputField"
                placeholder={placeholder}
                required={required}
                name={name}
                value={value}
                onChange={e => setValue(e.target.value)}
                autoComplete="off"
            />
            {value && <button className="delete" onClick={() => setValue("")}></button>}
        </label>
    );
};
export default InputField;