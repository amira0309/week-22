class List extends React.Component {
    render() {
				const {name, occupation, url, info} = this.props;
        return (
            <div className="ListHeroes">
                <div className="name">
                    <img src={url} alt={name}/>
                    <h4 className="occupation">{occupation}</h4>
                    <p className="info">{info}</p>
                </div>
			</div>
);
}
}
export default List;