import './App.scss';
import Home from './componenets/home/home';
import Nav from './componenets/nav/nav';
const App = () => {
	return (
		<div className="app">
			<div className="app__container">
				<Home/>
				{/* <Nav/> */}
			</div>
		</div>
	);
}

export default App;
