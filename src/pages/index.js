import React from 'react';
import Layout from '../components/layout/layout';
import InputTextField from '../components/form/input-text-field';

const imageStyle = {
    width: '25vh',
};

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key, e) {
        this.setState((state) => {
            state[key] = e.target.value;
            return state;
        });
        console.log(this.state.username);
    }

    render() {
        return <Layout>
            <h3>Split</h3>
            <img src="./images/view.jpg" style={imageStyle} />

            <InputTextField label="Username" name="username" value={this.state.username} onChange={ (e) => this.handleChange('username', e) } />
            <InputTextField label="Password" name="password" value={this.state.password} onChange={ (e) => this.handleChange('password', e) } />
        </Layout>
    }

}

export default Index