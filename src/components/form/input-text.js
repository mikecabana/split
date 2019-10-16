import React from 'react';

class InputText extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange && this.props.onChange(e);
    }

    render() {
        const {
            className,
            value,
            name,
        } = this.props;

        return <input
            className={className}
            type="text"
            name={name}
            value={value}
            onChange={this.handleChange} />;
    }

}

export default InputText;
