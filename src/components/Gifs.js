import React from 'react';

export class Gifs extends React.Component {
    render() {
        const src = this.props.src;
        return (
            <div>
                <h1>Gifs</h1>
                <img src={src} alt="text" />
            </div>
        );
    }
}
