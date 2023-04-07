import Watches from './components/Watches';
import moment from 'moment';
import './App.css';

const dataForm = {
	name: 'name',
	timeZone: 'utc'
}

const items = [{
	id: '1231431',
	name: 'Moscow',
	utc: 3,
	time: moment(new Date()).locale("ru").utcOffset(3).format('LTS')
}]

function App() {
  return (
    <div className = "App">
		<Watches dataForm={dataForm} items={items}>
		</Watches>
    </div>
  );
}

export default App;
