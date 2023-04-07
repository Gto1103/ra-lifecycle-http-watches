import { useState } from 'react';
import { nanoid } from 'nanoid';
import ClockModel from '../../models/ClockModel';
import './FormWatch.css'

const FormWatch = (props) => {

	const { name, timeZone, onSubmit } = props;

	/**
	 * В onSubmit возвращаем данные из формы обратно в Watch
	 */

	const [form, setForm] = useState({
		name: '',
		utc: ''
	})

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const clock = new ClockModel(nanoid(), form.name, form.utc);
		onSubmit(clock);
		setForm({
			name: '',
			utc: ''
		});
	}

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setForm(prevForm => ({...prevForm, [name]: value}))
	}

	return (
		<form className="watch-form" onSubmit={handleSubmit}>
			<label htmlFor={name} className={"label-" + name}>Name of city:</label>
			<input 
				className={"input-" + name}
				name={name}
				value={form.name}
				onChange={handleChange}
				type="text" 
				placeholder="Enter city in format 'Moscow'"
				required />
			<label htmlFor={timeZone} className={"label-" + timeZone}>Time zone:</label>
			<input 
				className={"input-" + timeZone}
				name={timeZone}
				value={form.utc}
				onChange={handleChange}
				type="number" 
				min={-12}
				max={+14}
				placeholder="Enter a time zone in the range -12 to +14"
				required />
			<button className="form-button" type="submit" onSubmit={handleSubmit}>New world clock</button>
		</form>
	)
}

export default FormWatch;