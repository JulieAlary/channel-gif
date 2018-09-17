import React from 'react';
import ReactDOM from 'react-dom';
import { Gifs} from '../components/Gifs';

const GIFPATHS = [
    'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
    'https://cdn-images-1.medium.com/max/1200/1*wbD3IaUAwYsSHJa9Y6OBBA.png'
];

export class GifsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentGP: 0 };

        this.interval = null;

        this.nextGP = this.nextGP.bind(this);
    }

    nextGP() {
        let current = this.state.currentGP;
        let next = ++current % GIFPATHS.length;
        this.setState({ currentGP: next });
    }

    componentDidMount() {
        this.interval = setInterval(this.nextGP, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const src = GIFPATHS[this.state.currentGP];
        return <Gifs src={src}/>;
    }
}

ReactDOM.render(
    <GifsContainer />,
    document.getElementById('root')
);