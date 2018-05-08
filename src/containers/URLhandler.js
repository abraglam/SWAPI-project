import { Component } from 'react';

class URLhandler extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
        };
    };

async componentDidMount() {
    const { url, type } = this.props;
    const f1 = await fetch(url);
    const f2 = await f1.json()
    const f3 = f2[type];
    this.setState({data: f3});
};

render() {
    const { i, len } = this.props;
    return(
        !len || len === i + 1 ? this.state.data : this.state.data + ", " 
    )
};
}; 
export default URLhandler;