import InputText from './input-text';

const InputTextField = ({ label, ...inputProps }) => {
    return <div className="input-text-field field">
        <label htmlFor={inputProps.name}>
            {label}
            <InputText {...inputProps} />
        </label>
    </div>
}

export default InputTextField;