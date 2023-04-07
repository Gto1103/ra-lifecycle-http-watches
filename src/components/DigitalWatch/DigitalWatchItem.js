import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

const DigitalWatchItem = ({ id, name, utc, timeNow, handleDelete}) => {

	const [time, setTime] = useState(
		timeNow
	);

	useEffect(() => {
		const timerID = setTimeout(() => {
			setTime(moment().utcOffset(+utc).format('LTS'));
		}, 1000);
		return () => {
			clearTimeout(timerID);
		};
	});

	return (
		<li className="digital-clock">
			<h3 className="city-name">{name}</h3>
			<h5 className="utc">{"Часовой пояс: " + utc}</h5>
         <div className="wrapper-digital-clock">
				<span className="digital-clock">{time}</span>
         </div>
			<span className="clock-delete" onClick={() => handleDelete(id)}>✘</span>
		</li>
	)
}

export default DigitalWatchItem;