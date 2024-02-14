import React from 'react';

class List extends React.Component {
    render() {
        const { name, occupation, url, info } = this.props;
        return (
            <div className="List">
                <div className="name">
                    <img src={url} alt={name}/>
                    <h2 className="name">{name}</h2>
                    <h4 className="occupation">{occupation}</h4>
                    <p className="info">{info}</p>
                </div>
            </div>
        );
    }
}

export default List;
