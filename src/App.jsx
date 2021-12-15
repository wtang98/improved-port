import React, {useState, useEffect} from 'react';
import './App.scss';
import Home from './componenets/home/home';
import SquareLoader from 'react-spinners/SquareLoader';

const App = () => {

	const [loading, setLoading] = useState(false);

	useEffect(()=> {
		setLoading(true)
		setTimeout(()=> {
			setLoading(false);
		}, 2000)
	}, [])
	
	return (
		<div className="app">
			{loading ? (
				<SquareLoader size={30} color={'#008080'} loading={loading}/>
			) : (
				<div className="app__container">
					<Home/>
				</div>
			)}
		</div>
	);
}

export default App;
