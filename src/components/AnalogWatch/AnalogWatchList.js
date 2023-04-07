
const AnalogWatchList = ({ items, children}) => {


	return (
		<ul className="analog-watch-list">
			{children(items)}
		</ul>
	)
}

export default AnalogWatchList;