import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

const AnalogWatchItem = ({ id, name, utc, handleDelete}) => {

	const [time, setTime] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	useEffect(() => {
		const timerID = setTimeout(() => {
			setTime(prev => ({...prev, 
				hours: moment().utcOffset(+utc).format('LTS').slice(0,2),
				minutes: moment().utcOffset(+utc).format('LTS').slice(3,5),
				seconds: moment().utcOffset(+utc).format('LTS').slice(6,8)
			}))
		}, 1000);
		return () => {
			clearTimeout(timerID);
		};
	});

	return (
		<li className="analog-clock">
			<h3 className="city-name">{name}</h3>
			<h5 className="utc">{"Часовой пояс: " + utc}</h5>
         <div className="wrapper-analog-clock">
				<div className="wrapper">
					<span className="hour" style={{transform :`rotate(${time.hours*30}deg)`}}></span>
					<span className="minute" style={{transform :`rotate(${time.minutes*6}deg)`}}></span>
					<span className="second" style={{transform :`rotate(${time.seconds*6}deg)`}}></span>
					<span className="dot"></span>
				</div>
			</div>
			<span className="clock-delete" onClick={() => handleDelete(id)}>✘</span>
		</li>
	)
}

export default AnalogWatchItem;