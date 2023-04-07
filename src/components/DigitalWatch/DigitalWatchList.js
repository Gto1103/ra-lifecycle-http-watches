
const DigitalWatchList = ({ items, children }) => {

	return (
		<ul className="digital-watch-list">
			{children(items)}
		</ul>
	)
}

export default DigitalWatchList;