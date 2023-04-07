import { useState } from 'react';
import moment from 'moment';
import FormWatch from './FormWatch/FormWatch';
import AnalogWatchList from './AnalogWatch/AnalogWatchList';
import AnalogWatchItem from './AnalogWatch/AnalogWatchItem';
import DigitalWatchList from './DigitalWatch/DigitalWatchList';
import DigitalWatchItem from './DigitalWatch/DigitalWatchItem';
import './Watches.css';

const Watches = (props) => {

	const {dataForm} = props;

	const [clocks, setClocks] = useState([{
		id: '1231431',
		name: 'Moscow',
		utc: '+3',
		timeNow: moment(new Date()).locale("ru").utcOffset(3).format('LTS')
	}]);

	const onSubmit = (data) => {
		const { id, name, utc } = data;
		const time = moment(new Date()).locale("ru").utc().utcOffset(+utc).format('LTS');

		setClocks(prevForm => ([...prevForm, {id: id, name: name, utc: utc, time: time}]));
	}

	const handleDelete = (id) => {
		setClocks(clocks.filter(clock => clock.id !== id));
	}

	return (
		<div className="watches">
			<FormWatch {...dataForm} onSubmit={onSubmit}>
			</FormWatch>	
			<DigitalWatchList items={clocks}>
				{items => items.map(item=> <DigitalWatchItem {...item} key={item.id} handleDelete={handleDelete}/>)}
			</DigitalWatchList>
			<AnalogWatchList items={clocks}>
				{items => items.map(item=> <AnalogWatchItem {...item} key={item.id} handleDelete={handleDelete}/>)}
			</AnalogWatchList>
		</div>
	)
}

export default Watches;